"use client";

import { motion } from "framer-motion";

const nodes = Array.from({ length: 22 }).map((_, index) => ({
  id: index,
  size: 6 + (index % 5) * 6,
  left: 8 + ((index * 11) % 84),
  top: 10 + ((index * 7) % 76),
  duration: 6 + (index % 6),
  delay: index * 0.18,
  color:
    index % 4 === 0
      ? "rgba(244, 237, 229, 0.9)"
      : index % 3 === 0
        ? "rgba(167, 139, 250, 0.85)"
        : "rgba(92, 225, 230, 0.9)",
}));

const strands = [
  { width: "32%", left: "14%", top: "28%", rotate: "-14deg" },
  { width: "24%", left: "34%", top: "42%", rotate: "18deg" },
  { width: "20%", left: "56%", top: "24%", rotate: "-22deg" },
  { width: "30%", left: "48%", top: "58%", rotate: "10deg" },
  { width: "18%", left: "24%", top: "62%", rotate: "-8deg" },
];

export function AmbientCanvas() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-90">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(92,225,230,0.16),transparent_24%),radial-gradient(circle_at_22%_20%,rgba(167,139,250,0.15),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(192,38,211,0.12),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(92,225,230,0.08),transparent_26%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-biolume-300/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aura-400/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {strands.map((strand, index) => (
        <motion.div
          key={index}
          className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-biolume-300/55 to-transparent"
          style={{
            width: strand.width,
            left: strand.left,
            top: strand.top,
            transform: `rotate(${strand.rotate})`,
            transformOrigin: "left center",
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scaleX: [0.92, 1.05, 0.92] }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute rounded-full"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.left}%`,
            top: `${node.top}%`,
            background: node.color,
            boxShadow: `0 0 24px ${node.color}`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, node.id % 2 === 0 ? 10 : -8, 0],
            scale: [1, 1.25, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={`seed-${index}`}
          className="absolute rounded-full bg-biolume-300/70 blur-[1px]"
          style={{
            width: `${2 + (index % 4) * 2}px`,
            height: `${2 + (index % 4) * 2}px`,
            left: `${(index * 9) % 100}%`,
            top: `${90 - ((index * 5) % 70)}%`,
          }}
          animate={{ y: [0, -90, -150], opacity: [0, 0.8, 0], scale: [0.8, 1.3, 0.6] }}
          transition={{
            duration: 8 + index * 0.35,
            repeat: Infinity,
            ease: "easeOut",
            delay: index * 0.45,
          }}
        />
      ))}
    </div>
  );
}
