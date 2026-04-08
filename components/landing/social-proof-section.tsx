import { testimonials } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function SocialProofSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Social Proof"
            title="Souls who returned to the Field"
            description="Before: effort, vigilance, overstimulation. After: softness, space, and a nervous system that finally stops gripping."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="eywa-border glass-panel relative overflow-hidden rounded-[30px] p-6">
                <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-biolume-300/70 to-transparent" />
                <div className="mb-6 flex items-center gap-4 pt-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.85),rgba(167,139,250,0.55),rgba(10,15,28,0.9))] text-lg font-semibold text-cosmos-950 shadow-[0_0_24px_rgba(92,225,230,0.35)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-cream">{testimonial.name}</div>
                    <div className="text-sm text-biolume-300">{testimonial.result}</div>
                  </div>
                </div>
                <div className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/35 sm:grid-cols-2">
                  <span>Before: fragmented</span>
                  <span>After: reconnected</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
