import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { AuroraBackground } from "@/components/ui/BackgroundBeams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@fsd-niraj",
  authors: [{ name: "Niraj Panchal" }],
  applicationName: "Niraj Panchal Portfolio",
  description: "A portfolio website containing latest update of my professional life and some technical blogs which I find helpful.",
  keywords: [
    "Niraj Panchal",
    "Niraj",
    "fsd",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Cloud Developer",
    "AWS Developer",
    "Azure Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "App Developer",
    "Toronto",
    "Humber College Alumni",
    "Software engineer resume",
    "software engineer",
    "software engineer portfolio",
    "full stack developer",
  ],
  openGraph: {
    title: "Niraj Panchal | Full Stack Developer Portfolio",
    description: "Explore Niraj professional life, projects, blog posts, and skills as a Full Stack Developer.",
    url: "https://fsd-niraj.com",
    type: "website",
    siteName: "Niraj Panchal Portfolio",
  },
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased tracking-tight`}
      >
        <AuroraBackground>
          {children}
        </AuroraBackground>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7905964889390214"
          crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}