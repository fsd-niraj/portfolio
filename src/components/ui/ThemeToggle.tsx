"use client";

import { useState, useEffect } from "react";
import { themes } from "@/data/themes";

export default function ThemeToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = themes[index];

    themes.forEach((t) => document.body.classList.remove(t.name));
    document.body.classList.add(current.name);

    themes.forEach((t) => {
      if (!t.overlay) return;
      const el = document.getElementById(t.overlay.id);
      if (!el) return;
      el.style.opacity = String(
        t.name === current.name ? t.overlay.activeOpacity : 0
      );
      el.style.mixBlendMode = String(
        t.name === current.name ? t.overlay.blendMode : ""
      );
    });
  }, [index]);

  return (
    <button
      onClick={() => setIndex((i) => (i + 1) % themes.length)}
      aria-label="Toggle theme"
      className="absolute top-10 right-10 translate-x-1/2 w-5 h-5 rounded-full cursor-pointer fixed"
      style={{ background: "var(--foreground)" }}
    />
  );
}
