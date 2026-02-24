import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "hsl(var(--midnight))",
        parchment: "hsl(var(--parchment))",
        gold: "hsl(var(--gold))",
        "gold-light": "hsl(var(--gold-light))",
        cream: "hsl(var(--cream))",
        stone: "hsl(var(--stone))",
        silver: "hsl(var(--silver))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-crimson)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      letterSpacing: {
        "wider-custom": "0.15em",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
