import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/data/home";

export default function HeroHead() {
  return (
    <ScrollReveal>
      <div className="py-4 mt-[10rem]">
        <h1 className="text-4xl font-season">
          Hello, I'm {hero.name}. <br />
          I'm a <span className="font-exposure text-muted">{hero.role}</span> working in <br />
          {hero.fields}
        </h1>
      </div>
    </ScrollReveal>
  )
}
