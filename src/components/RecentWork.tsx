import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/home";
import Header from "./SectionHeader";

// Cycles through row patterns (each sums to 4 cols), then handles the remainder.
// e.g. 8 items → [2,1,1] + [1,1,2] + [2,2] — no empty cells, varied sizes.
function getBentoSpans(count: number): number[] {
  const rowPatterns = [[2, 1, 1], [1, 1, 2], [2, 2]];
  const spans: number[] = [];
  let i = 0, patIdx = 0;

  while (i < count) {
    const pattern = rowPatterns[patIdx % rowPatterns.length];
    if (i + pattern.length <= count) {
      spans.push(...pattern);
      i += pattern.length;
    } else {
      const rem = count - i;
      if (rem === 1) spans.push(4);
      else if (rem === 2) spans.push(2, 2);
      else spans.push(2, 1, 1);
      break;
    }
    patIdx++;
  }

  return spans;
}

const colClass: Record<number, string> = { 1: 'col-span-1', 2: 'col-span-2', 4: 'col-span-4' };
const imgClass: Record<number, string> = { 1: 'aspect-square', 2: 'aspect-[2/1]', 4: 'aspect-video' };

const Card = ({ title, category, img, href, imageClass }: { img: string; title: string; category: string; href: string; imageClass: string }) => (
  <a href={href} className="block rounded-sm transition-all duration-200 ease-in-out cursor-pointer hover:bg-foreground/5 p-1 hover:-translate-y-[1.5px] group/card">
    <div className={`rounded-sm overflow-hidden ${imageClass}`}>
      <img src={img} alt={title} className="size-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105" />
    </div>
    <p className="text-sm mt-1">{title}</p>
    <p className="text-sm text-muted capitalize">{category}</p>
  </a>
)

export default function RecentWork() {
  const spans = getBentoSpans(projects.length);

  return (
    <ScrollReveal>
      <div className="py-4">
        <Header title="recent work" />
        <div className="grid grid-cols-4 gap-2 group">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-opacity duration-200 group-hover:opacity-40 hover:!opacity-100 ${colClass[spans[index]]}`}
            >
              <Card {...project} imageClass={imgClass[spans[index]]} />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
