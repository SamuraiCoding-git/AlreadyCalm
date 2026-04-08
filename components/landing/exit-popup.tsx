"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ExitPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!shown) {
        setOpen(true);
        setShown(true);
      }
    }, 24000);

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shown]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-cosmos-950/65 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-biolume-300/20 bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(10,15,28,0.98))] p-8 shadow-glow"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 text-sm text-white/50 transition hover:text-white"
            >
              Close
            </button>
            <div className="text-xs uppercase tracking-[0.3em] text-biolume-300">
              Before you leave
            </div>
            <h3 className="display-font mt-5 text-4xl leading-tight text-cream">
              The calm you want may be one perception away.
            </h3>
            <p className="mt-5 text-base leading-8 text-white/70">
              If the page resonated, don&apos;t drop back into the noise and promise yourself
              you&apos;ll return later. Take the 10-minute reset now while your system is open.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://app.lava.top/products/f62a3b9d-3a94-4d12-a69d-6cb13b76584a"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-biolume-400 px-6 py-4 text-base font-semibold text-cosmos-950"
              >
                Return to Calm — $49
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 px-6 py-4 text-base font-medium text-white/70"
              >
                Keep browsing
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
