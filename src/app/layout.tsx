import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@fsd-niraj",
  description: "A portfolio website containing latest update of my professional life and some technical blogs which I find helpful.",
  keywords: ["software engineer", "software developer", "niraj", "neeraj", "linkedin", "resume", "app developer", "mobile developer", "toronto", "immediate joiner", "open source", "freelance", "contract", "full time", "new grad", "experienced"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
