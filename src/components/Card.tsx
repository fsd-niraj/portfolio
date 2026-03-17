import Image from "next/image";

export default function Card({
  title,
  category,
  img,
  href,
  imageClass,
}: {
  img: string;
  title: string;
  category: string;
  href: string;
  imageClass?: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-sm transition-all duration-200 ease-in-out cursor-pointer hover:bg-foreground/5 p-1 hover:-translate-y-[1.5px] group/card"
    >
      <div className={`rounded-sm overflow-hidden ${imageClass}`}>
        <Image
          src={img}
          alt={title}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
          width={400}
          height={300}
          loading="lazy"
        />
      </div>
      <p className="text-sm mt-1">{title}</p>
      <p className="text-sm text-muted capitalize">{category}</p>
    </a>
  );
}
