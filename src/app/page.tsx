"use client";

import Contact from "@/components/Contact";
import Glance from "@/components/Glance";
import HeroHead from "@/components/HeroHead";
import RecentWork from "@/components/RecentWork";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Writings from "@/components/Writings";
import Books from "@/components/Books";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroHead />
      <hr className="full-bleed transition-[border] duration-500" />
      <Glance />
      <hr className="full-bleed transition-[border] duration-500" />
      <RecentWork />
      <hr className="full-bleed transition-[border] duration-500" />
      <Writings />
      <hr className="full-bleed transition-[border] duration-500" />
      <Books />
      <hr className="full-bleed transition-[border] duration-500" />
      <Contact />
      <ThemeToggle />
    </div>
  );
}
