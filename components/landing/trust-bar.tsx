import { trustStats } from "@/lib/content";
import { Reveal } from "./reveal";

export function TrustBar() {
  return (
    <Reveal className="section-shell -mt-10 pb-12 sm:-mt-16">
      <div className="eywa-border glass-panel noise rounded-[32px] px-6 py-5 shadow-glow">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-biolume-400 shadow-[0_0_20px_rgba(92,225,230,0.8)]" />
              <div>
                <div className="display-font text-2xl text-cream">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/55">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
