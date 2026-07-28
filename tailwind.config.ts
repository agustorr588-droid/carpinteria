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
        background: "#faf8f5",
        "background-alt": "#f3efe9",
        foreground: "#1c1917",
        "foreground-muted": "#57534e",
        accent: "#8b5e3c",
        "accent-light": "#a0704e",
        "accent-gold": "#c9a87c",
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
