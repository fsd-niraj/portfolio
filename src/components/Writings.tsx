import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { blogs } from "@/data/home";
import Header from "./SectionHeader";

const WriteupCard = ({
  date,
  title,
  subTitle,
  href,
}: {
  date: string;
  title: string;
  subTitle: string;
  href: string;
}) => (
  <a
    href={href}
    className="flex p-2 rounded-sm transition-all duration-200 ease-in-out translate-x-0 hover:translate-x-1 hover:bg-foreground/5 cursor-pointer"
  >
    <div className="w-1/3 text-sm text-muted">
      <p>{date}</p>
    </div>
    <div className="w-full">
      <p className="capitalize text-md">{title}</p>
      <p className="text-muted text-sm">{subTitle}</p>
    </div>
  </a>
);

export default function Writings() {
  return (
    <ScrollReveal>
      <div className="py-4">
        <div className="flex flex-col gap-1 group">
          <Header title="writings" />
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="transition-opacity duration-200 group-hover:opacity-40 hover:!opacity-100"
            >
              <WriteupCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
