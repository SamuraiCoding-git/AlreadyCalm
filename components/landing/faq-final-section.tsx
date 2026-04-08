"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { Countdown } from "./countdown";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FaqFinalSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(92,225,230,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.12),transparent_30%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions from minds on the edge of saying yes"
            description="Clean answers for the final layer of resistance."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-medium text-cream">{faq.question}</span>
                    <span className="text-2xl text-biolume-300">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <p className="px-6 pb-6 text-base leading-8 text-white/68">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-16 text-center shadow-glow sm:px-10 lg:px-16">
            <div className="absolute inset-0">
              {Array.from({ length: 22 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full bg-biolume-300/70"
                  style={{
                    width: `${3 + (index % 4) * 3}px`,
                    height: `${3 + (index % 4) * 3}px`,
                    left: `${(index * 9) % 100}%`,
                    top: `${(index * 13) % 100}%`,
                  }}
                  animate={{ y: [0, -22, 0], opacity: [0.1, 0.9, 0.1] }}
                  transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="inline-flex rounded-full border border-biolume-300/25 bg-biolume-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-biolume-300">
                Final CTA
              </div>
              <h3 className="display-font glow-text mt-6 text-5xl leading-tight text-cream sm:text-6xl">
                You are not here to build calm.
                <br />
                You are here to return to it.
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                The field is still here underneath the noise. If this page already made your body
                exhale a little, the video is the next obvious step.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <a
                  href="https://app.lava.top/products/f62a3b9d-3a94-4d12-a69d-6cb13b76584a"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-biolume-500 via-biolume-400 to-aura-500 px-8 py-4 text-base font-semibold text-cosmos-950 shadow-[0_0_34px_rgba(92,225,230,0.36)] transition hover:-translate-y-1"
                >
                  Return to Calm — $49
                </a>
                <div className="text-sm text-white/55">
                  Offer closes in <span className="ml-2 inline-flex"><Countdown /></span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
