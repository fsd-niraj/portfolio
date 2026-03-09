import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { glance } from "@/data/home";

export default function Glance() {
  return (
    <ScrollReveal>
      <div className="py-4">
        <h2 className="mb-4 text-xs uppercase tracking-widest text-muted">at a glance</h2>
        <div className="flex gap-2 group">
          {glance.map((d, i) =>
            <div
              key={i}
              className="w-full p-2 rounded-sm transition-all duration-200 group-hover:opacity-40 hover:!opacity-100 hover:bg-foreground/5 cursor-default"
            >
              <p className="font-exposure text-5xl mb-1">{d.tenure}</p>
              <p className="capitalize text-muted text-sm">{d.description}</p>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
