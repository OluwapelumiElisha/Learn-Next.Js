import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        padding: {'100': '100px'},
      },
      boxShadow: {
        'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
