"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid";

export function BackgroundGrid() {
  return (
    <div className="fixed top-0 left-0 right-0 flex h-[500px] w-full opacity-[.5]">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
