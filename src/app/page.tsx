"use client";

import Contact from "@/components/Contact";
import Glance from "@/components/Glance";
import HeroHead from "@/components/HeroHead";
import RecentWork from "@/components/RecentWork";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Divider from "@/components/ui/Divider";
import Writings from "@/components/Writings";
import Books from "@/components/Books";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <HeroHead />
        <Divider />
        <Glance />
        <Divider />
        <RecentWork />
        <Divider />
        <Writings />
        <Divider />
        <Books />
        <Divider />
        <Contact />
      </div>
      <ThemeToggle />
    </>
  );
}
