"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

async function getPreview(url: string) {
  const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
  if (!res.ok) throw new Error("Preview failed");
  return res.json();
}

export default function PreviewCard({
  img,
  title,
  href,
  category,
}: {
  img: string;
  title: string;
  href: string;
  category: string;
  imageClass?: string;
}) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!img) return;
    if (img.startsWith("/")) return setData({ image: img });
    getPreview(img)
      .then(setData)
      .catch(() => setData(null));
  }, [img]);
  if (!data) return null;

  return (
    <Card
      img={data.image}
      title={title}
      category={category}
      href={href}
      imageClass="h-40 w-full"
    />
  );
}
