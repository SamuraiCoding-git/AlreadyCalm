import { painCards } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function PainSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Pain & Agitation"
            title="Which frequency are you stuck in right now?"
            description="Not symptoms. Signals. The body keeps transmitting what the mind has been trying to outrun."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {painCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article className="eywa-border glass-panel h-full rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <span className="display-font text-3xl text-biolume-300">{card.icon}</span>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-cream">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
