import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canopy: { 950: "#101B0C", 900: "#182611", 800: "#233318", 700: "#324621", 600: "#445A2C" },
        mist: { 100: "#EFF5E4", 200: "#DCE8C8", 300: "#C3D7A4" },
        clay: { 500: "#6E8F52", 600: "#587342", 700: "#455C34" },
        moss: "#8A9A6E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;