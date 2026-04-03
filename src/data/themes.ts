export type ThemeConfig = {
  name: string;
  overlay?: {
    src: string;
    id: string;
    activeOpacity: number;
    blendMode?: string;
  };
};

export const themes: ThemeConfig[] = [
  { name: "light" },
  { name: "dark" },
  {
    name: "leaves",
    overlay: {
      src: "/assets/leaves.mp4",
      id: "overlay-leaves",
      activeOpacity: 0.35,
      blendMode: "multiply",
    },
  },
  {
    name: "dessert",
    overlay: {
      src: "/assets/dessert.mp4",
      id: "overlay-dessert",
      activeOpacity: 0.35,
      blendMode: "difference",
    },
  },
];
