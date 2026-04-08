import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: "#0A0F1C",
          900: "#111827",
          850: "#1A2333",
          800: "#24324B",
        },
        biolume: {
          300: "#9BF7FF",
          400: "#67E8F9",
          500: "#5CE1E6",
          600: "#1FC8D8",
        },
        aura: {
          400: "#C084FC",
          500: "#A78BFA",
          600: "#C026D3",
        },
        cream: "#F4EDE5",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(92,225,230,0.2), 0 0 40px rgba(92,225,230,0.18)",
        aura: "0 0 0 1px rgba(167,139,250,0.25), 0 0 50px rgba(192,38,211,0.22)",
      },
      backgroundImage: {
        nebula:
          "radial-gradient(circle at top, rgba(92,225,230,0.16), transparent 40%), radial-gradient(circle at 20% 30%, rgba(167,139,250,0.14), transparent 35%), radial-gradient(circle at 80% 20%, rgba(192,38,211,0.08), transparent 30%)",
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseGlow: "pulseGlow 4.4s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        shimmer: "shimmer 5.5s linear infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.02)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", boxShadow: "0 0 30px rgba(92,225,230,0.1)" },
          "50%": { opacity: "1", boxShadow: "0 0 65px rgba(92,225,230,0.28)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
