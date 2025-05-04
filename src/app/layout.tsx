import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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
    "Next.js Portfolio",
    "Software Engineer",
    "DevOps",
    "Microservices",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
    "App Developer",
    "Toronto",
    "Humber College Alumni"
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
        {children}
      </body>
    </html>
  );
}
