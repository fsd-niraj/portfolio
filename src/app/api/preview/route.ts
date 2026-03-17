import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import dns from "dns/promises";
// import net from "net";

// ---- CONFIG ----
const TIMEOUT_MS = 5000;
const MAX_HTML_SIZE = 2 * 1024 * 1024; // 2MB

// ---- SSRF PROTECTION ----
async function isPrivateIP(hostname: string) {
  try {
    const { address } = await dns.lookup(hostname);

    return (
      address.startsWith("10.") ||
      address.startsWith("127.") ||
      address.startsWith("192.168.") ||
      address.startsWith("172.") || // (refine if needed: 172.16–31)
      address === "0.0.0.0"
    );
  } catch {
    return true;
  }
}

function isValidUrl(url: string) {
  try {
    const u = new URL(url);
    return ["http:", "https:"].includes(u.protocol);
  } catch {
    return false;
  }
}

// ---- IMAGE DETECTION ----
function isDirectImage(url: string, contentType?: string | null) {
  return (
    contentType?.startsWith("image/") ||
    /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url)
  );
}

// ---- FETCH WITH TIMEOUT ----
async function fetchWithTimeout(url: string, options: any = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (PreviewBot)",
        ...options.headers,
      },
    });
    return res;
  } finally {
    clearTimeout(timeout);
  }
}

// ---- MAIN HANDLER ----
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url || !isValidUrl(url)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const parsed = new URL(url);

  // SSRF block
  if (await isPrivateIP(parsed.hostname)) {
    return NextResponse.json({ error: "Blocked URL" }, { status: 403 });
  }

  try {
    // ---- STEP 1: HEAD request ----
    let contentType: string | null = null;

    try {
      const headRes = await fetchWithTimeout(url, { method: "HEAD" });
      contentType = headRes.headers.get("content-type");
    } catch {
      // fallback handled below
    }

    // ---- STEP 2: IMAGE FAST PATH ----
    if (isDirectImage(url, contentType)) {
      return NextResponse.json({
        type: "image",
        url,
        image: url,
        title: null,
        description: null,
      });
    }

    // ---- STEP 3: FETCH HTML ----
    const res = await fetchWithTimeout(url);
    const ct = res.headers.get("content-type") || "";

    if (!ct.includes("text/html")) {
      return NextResponse.json({ error: "Not HTML content" }, { status: 400 });
    }

    // limit size
    const reader = res.body?.getReader();
    let received = 0;
    const chunks: Uint8Array[] = [];

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        received += value.length;
        if (received > MAX_HTML_SIZE) break;

        chunks.push(value);
      }
    }

    const html = Buffer.concat(chunks).toString("utf-8");
    const $ = cheerio.load(html);

    const getMeta = (prop: string) =>
      $(`meta[property="${prop}"]`).attr("content") ||
      $(`meta[name="${prop}"]`).attr("content");

    let image =
      getMeta("og:image") ||
      getMeta("twitter:image") ||
      $("img").first().attr("src") ||
      null;

    // normalize relative image
    if (image) {
      try {
        image = new URL(image, url).href;
      } catch {
        image = null;
      }
    }

    const data = {
      type: "link",
      url,
      title: getMeta("og:title") || $("title").text() || null,
      description: getMeta("og:description") || null,
      image,
    };

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch preview " + err },
      { status: 500 }
    );
  }
}
