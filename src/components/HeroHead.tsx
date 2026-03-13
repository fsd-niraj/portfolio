import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/data/home";
import { FlipWords } from "./ui/Filpwords";

export default function HeroHead() {

  const words = ["scalable.", "secure.", "reliable."]

  return (
    <ScrollReveal>
      <div className="py-4 mt-[10rem]">
        <h1 className="text-4xl font-season">
          Hello, I'm {hero.name}. <br />
          I <span className="font-exposure text-muted">design</span> systems <br />
          that are <FlipWords words={words} duration={350} className="font-exposure text-muted" />
        </h1>
      </div>
    </ScrollReveal>
  )
}
