import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/BackgroundBeams";

const inter = Maven_Pro({
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "@fsd-niraj",
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
        className={`${inter.className} antialiased tracking-tight`}
      >
        <AuroraBackground>
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
