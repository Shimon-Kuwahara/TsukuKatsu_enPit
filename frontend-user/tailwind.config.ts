import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        "main-col": "#6600cc",
        "main-col-light": "#BBA3E0",
        "main-col-mid": "#9966FF",
        "sub-col" : "#52cdd4",
      },
    },
  },
  plugins: [],
};
export default config;
