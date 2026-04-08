import { offerBullets } from "@/lib/content";
import { Countdown } from "./countdown";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function OfferSection() {
  return (
    <section className="section-space" id="offer">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Offer + Guarantee"
            title="Reconnect for $49"
            description="A precise tripwire offer that feels premium, clean, and safe to say yes to from the very first visit."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="eywa-border glass-panel rounded-[34px] p-8 sm:p-10">
              <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-biolume-300">
                    One-time offer
                  </div>
                  <div className="mt-3 flex items-end gap-3">
                    <span className="display-font text-6xl text-cream">$49</span>
                    <span className="pb-2 text-xl text-white/30 line-through">$97</span>
                  </div>
                </div>
                <div className="rounded-[22px] border border-biolume-300/20 bg-biolume-400/10 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Price field closes in
                  </div>
                  <div className="mt-3">
                    <Countdown />
                  </div>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {offerBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-white/75">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-biolume-400 shadow-[0_0_16px_rgba(92,225,230,0.9)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.lava.top/products/f62a3b9d-3a94-4d12-a69d-6cb13b76584a"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-biolume-500 via-biolume-400 to-aura-500 px-6 py-4 text-base font-semibold text-cosmos-950 shadow-[0_0_34px_rgba(92,225,230,0.32)] transition hover:-translate-y-1"
              >
                Return to Calm — $49
              </a>

              <div className="mt-4 text-center text-sm text-white/45">
                Instant access · One-time payment · Mobile friendly
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-aura-400/20 bg-[linear-gradient(180deg,rgba(167,139,250,0.12),rgba(10,15,28,0.85))] p-8 shadow-aura">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-aura-500/15 blur-3xl" />
              <div className="inline-flex rounded-full border border-aura-300/25 bg-aura-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-aura-400">
                Cosmic seal
              </div>
              <h3 className="display-font mt-6 text-4xl leading-tight text-cream">
                Already Calm or It’s Free Guarantee
              </h3>
              <p className="mt-5 text-base leading-8 text-white/72">
                Watch the full transmission. If you do not feel more settled, more spacious,
                and more connected to your natural state, request a refund. No friction. No
                strange hoops. The field either lands, or you keep your money.
              </p>
              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm uppercase tracking-[0.28em] text-white/50">
                Low-risk tripwire built for cold traffic trust
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
