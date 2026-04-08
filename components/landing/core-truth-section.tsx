import { truthPoints } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function CoreTruthSection() {
  return (
    <section className="section-space relative">
      <div className="absolute inset-x-0 top-24 mx-auto h-64 w-64 rounded-full bg-aura-500/10 blur-3xl" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Core Truth"
            title="Calm isn’t something you achieve. It’s the default state of the Universe and you are part of it."
            description="Most wellness content quietly teaches separation: you here, calm over there. Already Calm dissolves that split."
          />
        </Reveal>

        <div className="space-y-5">
          {truthPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="eywa-border glass-panel rounded-[24px] p-5">
                <div className="flex items-start gap-4">
                  <div className="relative mt-1 h-3 w-3 rounded-full bg-biolume-400 shadow-[0_0_22px_rgba(92,225,230,0.9)]">
                    <span className="absolute left-1/2 top-1/2 h-14 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-biolume-400/70 to-transparent" />
                  </div>
                  <p className="text-base leading-8 text-white/75">{point}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
