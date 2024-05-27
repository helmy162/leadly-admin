import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#407BFF",
        primaryHover: "#2E5BFF",
        darkBlue: "#0035AB",
        bgGray: "#F8FAFC",
        textGray: "#64748B",
        placeholder: "#94A3B8",
        black: "#0F172A",
        borderGray: "#E2E8F0",

        darkGray: "#6C6C6C",

        footerBG: "#010112",
        highlight: "#FF5603",
        star: "#F7C64F"
      },
    },
  },
  plugins: [],
};
export default config;
