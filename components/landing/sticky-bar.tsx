"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Countdown } from "./countdown";

export function StickyBar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-biolume-400 via-aura-400 to-transparent" style={{ scaleX: progress }} />
      <div className="fixed inset-x-3 bottom-3 z-[60]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-cosmos-950/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="min-w-0">
            <div className="truncate text-xs uppercase tracking-[0.22em] text-white/45">
              One 10-minute reset · $49
            </div>
            <div className="mt-1 text-sm text-white/70">
              2300+ already reconnected to the field
            </div>
          </div>
          <div className="hidden text-sm text-white/55 md:block">
            <Countdown />
          </div>
          <a
            href="#offer"
            className="shrink-0 rounded-full bg-biolume-400 px-5 py-3 text-sm font-semibold text-cosmos-950 transition hover:bg-biolume-300"
          >
            Return to Calm
          </a>
        </div>
      </div>
    </>
  );
}
