import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "background-alt": "#0a0a0a",
        foreground: "#f3efe9",
        "foreground-muted": "#a8a29e",
        accent: "#caa24f",
        "accent-light": "#e8c87a",
        "accent-gold": "#caa24f",
        "accent-gold-light": "#e8c87a",
        ink: "#f3efe9",
        ivory: "#050505",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        blurFadeUp: {
          "0%": { opacity: "0", filter: "blur(20px)", transform: "translateY(40px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        hairlineDraw: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "blur-fade-up": "blurFadeUp 1.1s ease-out forwards",
        "hairline-draw": "hairlineDraw 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
