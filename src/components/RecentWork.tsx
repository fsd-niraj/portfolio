import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/home";
import Header from "./SectionHeader";

const Card = ({ title, category, img, href }: { img: string; title: string; category: string; href: string }) => (
  <a href={href} className="block rounded-sm transition-all duration-200 ease-in-out cursor-pointer hover:bg-foreground/5 p-1 hover:-translate-y-[1.5px]">
    <div className="rounded-sm overflow-hidden">
      <img src={img} alt={title} className="size-full" />
    </div>
    <p className="text-sm mt-1">{title}</p>
    <p className="text-sm text-muted capitalize">{category}</p>
  </a>
)

export default function RecentWork() {
  return (
    <ScrollReveal>
      <div className="py-4">
        <Header title="recent work" />
        <div className="grid grid-cols-2 gap-2 group">
          {projects.map((project, index) =>
            <div key={index} className="transition-opacity duration-200 group-hover:opacity-40 hover:!opacity-100">
              <Card {...project} />
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
