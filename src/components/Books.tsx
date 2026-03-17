import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { books } from "@/data/home";
import Header from "./SectionHeader";

const WriteupCard = ({
  title,
  author,
  category,
}: {
  author: string;
  title: string;
  category: string;
}) => (
  <div className="flex p-2 rounded-sm transition-all duration-200 ease-in-out translate-x-0 hover:translate-x-1 hover:bg-foreground/5 capitalize cursor-default">
    <div className="w-2/3">
      <p>{title}</p>
    </div>
    <div className="w-full">
      <p className="capitalize text-muted">{author}</p>
      <p className="text-sm">{category}</p>
    </div>
  </div>
);

export default function Books() {
  return (
    <ScrollReveal>
      <div className="py-4">
        <div className="flex flex-col gap-1 group">
          <Header title="whitepapers and books" />
          {books.map((book, index) => (
            <div
              key={index}
              className="transition-opacity duration-200 group-hover:opacity-40 hover:!opacity-100"
            >
              <WriteupCard {...book} />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
