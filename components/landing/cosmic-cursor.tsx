"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CosmicCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 220, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 rounded-full bg-biolume-400/30 blur-md md:block"
      style={{ x: springX, y: springY, boxShadow: "0 0 35px rgba(92,225,230,0.65)" }}
    />
  );
}
