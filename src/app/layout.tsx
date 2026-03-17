import type { Metadata } from "next";
import "./globals.css";
import { Inter, Geist_Mono } from "next/font/google";
import Season from "next/font/local";
import { siteConfig } from "@/data/site-config";
import { getPersonSchema, getWebsiteSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const season = Season({
  src: "../../public/season.woff2",
  variable: "--font-season",
  style: "normal",
});

const exposure = Season({
  src: "../../public/exposure.woff2",
  variable: "--font-exposure",
  style: "normal",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  category: siteConfig.category,

  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.title,

  // Canonical URL — tells Google there is one true URL for this page
  alternates: {
    canonical: siteConfig.url,
  },

  // Controls how the page appears in search results
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // og:image itself comes from /opengraph-image.tsx (Next.js file convention)
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: "image/png",
      },
    ],
  },

  // Twitter Card — used by X (Twitter)
  // summary_large_image renders the full wide preview card
  twitter: {
    card: "summary_large_image",
    site: `@${siteConfig.author.twitterHandle}`,
    creator: siteConfig.author.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${season.variable} ${exposure.variable} ${geistMono.variable} antialiased tracking-tight`}
      >
        <div className="relative max-w-2xl m-auto border-x border-dashed border-border min-h-screen px-4">
          {children}
        </div>
        {siteConfig.analytics?.googleAdSenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.analytics.googleAdSenseId}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
