import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { decompress } from "wawoff2";
import { siteConfig } from "@/data/site-config";
import dotenv from "dotenv"

const env = process.env.NODE_ENV || 'development'
dotenv.config({ path: `.env.${env}` })

export const alt = siteConfig.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  const toFontData = async (file: string): Promise<Buffer> => {
    const raw = await readFile(file);
    const u8 = await decompress(raw);
    return Buffer.from(u8);
  };

  const [seasonFont] = await Promise.all([
    toFontData(path.join(process.cwd(), "public/season.woff2")),
  ]);

  const [exposureFont] = await Promise.all([
    toFontData(path.join(process.cwd(), "public/exposure.woff2")),
  ]);

  const base =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_SITE_URL;

  const bg = new URL("/opengraph-bg.png", base).toString();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        border: "2px solid #5a5a5a",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom 650 top 700",
        backgroundSize: "500px 500px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 54px 60px 72px",
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "#7a8087",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "Season",
            marginBottom: 44,
          }}
        >
          @fsd-niraj
        </span>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{ fontSize: 54, color: "#ededed", fontFamily: "Season" }}
          >
            Hey, I am Niraj,
          </span>

          <span
            style={{ fontSize: 52, color: "#ededed", fontFamily: "Exposure" }}
          >
            Software Engineer.
          </span>
          <span
            style={{ fontSize: 40, color: "#ededed", fontFamily: "Season" }}
          >
            Checkout this site to know more about my work
          </span>
        </div>

        <span
          style={{
            fontSize: 16,
            color: "#4a4a4a",
            fontFamily: "Season",
            marginTop: 44,
          }}
        >
          fsd-niraj.com
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Season",
          data: seasonFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "Exposure",
          data: exposureFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
