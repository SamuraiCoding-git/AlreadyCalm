import { timelineSteps } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ResetSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="The 10-Minute Reset"
            title="One video. Three steps back to the Field."
            description="A glowing path from overstimulation to return, mapped minute by minute."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="eywa-border glass-panel relative overflow-hidden rounded-[32px] p-8">
              <div className="absolute left-11 top-10 bottom-10 w-px bg-gradient-to-b from-biolume-300 via-aura-400 to-transparent" />
              <div className="space-y-10">
                {timelineSteps.map((step, index) => (
                  <div key={step.time} className="relative flex gap-6">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-biolume-400 text-xs font-semibold text-cosmos-950 shadow-[0_0_24px_rgba(92,225,230,0.7)]">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <div className="text-xs uppercase tracking-[0.28em] text-biolume-300">
                        {step.time}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-cream">{step.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(92,225,230,0.08),rgba(10,15,28,0.6)),linear-gradient(145deg,#111827,#0a0f1c)] p-8 shadow-glow">
              <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-biolume-400/10 blur-3xl" />
              <div className="absolute -left-10 bottom-6 h-32 w-32 rounded-full bg-aura-500/10 blur-3xl" />
              <div className="text-sm uppercase tracking-[0.28em] text-white/45">
                Preview the transmission
              </div>
              <h3 className="display-font mt-4 text-4xl leading-tight text-cream">
                Watch the first 47 seconds and feel the tone of the field.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                Crafted for cold traffic, but elevated like a ritual. Clear enough to convert.
                Beautiful enough to feel unforgettable.
              </p>
              <a
                href="#hero"
                className="mt-8 inline-flex rounded-full border border-biolume-300/30 bg-biolume-400/10 px-6 py-3 text-sm font-semibold text-biolume-300 transition hover:bg-biolume-400/15"
              >
                Watch 47-second preview
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
