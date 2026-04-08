"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Countdown } from "./countdown";

const AmbientCanvas = dynamic(
  () => import("./ambient-canvas").then((module) => module.AmbientCanvas),
  { ssr: false },
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-6">
      <div className="absolute inset-0 bg-nebula" />
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <AmbientCanvas />

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-biolume-300/60 blur-[2px]"
          style={{
            width: `${4 + (index % 3) * 3}px`,
            height: `${4 + (index % 3) * 3}px`,
            left: `${(index * 11) % 100}%`,
            top: `${(index * 7) % 100}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-biolume-400/20 bg-biolume-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-biolume-300">
              Already Calm · Cosmic Reset · One Video
            </div>
            <h1 className="display-font glow-text text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-[88px]">
              Stop Fighting
              <br />
              Your Own Mind
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              One 10-minute video returns you to your natural cosmic calm. No
              techniques. No breathing. No effort. Just remember who you already are.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              You&apos;re not broken. You&apos;re just disconnected from your default
              state. <span className="text-biolume-300">87% feel the shift in the first 8 minutes.</span>
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#offer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-biolume-500 via-biolume-400 to-aura-500 px-8 py-4 text-base font-semibold text-cosmos-950 shadow-[0_0_40px_rgba(92,225,230,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="h-3 w-3 rounded-full bg-cosmos-950/80 shadow-[0_0_16px_rgba(244,237,229,0.8)]" />
                Return to Calm — $49
              </a>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 backdrop-blur">
                Offer closes in <span className="ml-3 inline-flex"><Countdown /></span>
              </div>
            </div>

            <div className="mt-8 text-sm uppercase tracking-[0.3em] text-white/45">
              Trust: 2300+ already reconnected to the field
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-biolume-400/20 via-transparent to-aura-500/20 blur-3xl" />
            <div className="eywa-border glass-panel relative overflow-hidden rounded-[32px] p-4 shadow-aura">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-cosmos-850/70 p-4 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,225,230,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(192,38,211,0.16),transparent_28%)]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(10,15,28,0.1),rgba(10,15,28,0.85)),radial-gradient(circle_at_top,rgba(103,232,249,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.2),transparent_35%),linear-gradient(145deg,#0f1729,#101a2f)]">
                  <div className="absolute inset-0">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute rounded-full bg-biolume-300/90"
                        style={{
                          width: `${6 + (index % 4) * 6}px`,
                          height: `${6 + (index % 4) * 6}px`,
                          left: `${10 + ((index * 13) % 78)}%`,
                          top: `${8 + ((index * 9) % 78)}%`,
                          boxShadow: "0 0 18px rgba(92,225,230,0.55)",
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 3.6 + (index % 5),
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-0 top-10 mx-auto h-56 w-56 rounded-full border border-biolume-300/20 bg-biolume-300/10 blur-3xl" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cosmos-950 via-cosmos-950/50 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/50">
                      <span>47-second preview</span>
                      <span>Eywa signal online</span>
                    </div>

                    <div className="self-center">
                      <button
                        type="button"
                        className="group relative inline-flex h-28 w-28 items-center justify-center rounded-full border border-biolume-300/35 bg-white/10 backdrop-blur-xl transition-transform duration-300 hover:scale-105"
                      >
                        <span className="absolute inset-0 animate-pulseGlow rounded-full bg-biolume-400/20" />
                        <span className="absolute inset-3 rounded-full border border-aura-400/35" />
                        <span className="relative ml-1 h-0 w-0 border-b-[14px] border-l-[22px] border-t-[14px] border-b-transparent border-l-cream border-t-transparent" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                        Live neural preview
                      </div>
                      <p className="max-w-sm text-sm leading-7 text-white/72 sm:text-base">
                        A poetic, precise reset designed to feel like re-entering a living
                        field of safety instead of learning another technique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
