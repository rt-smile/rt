import type { Config } from "tailwindcss";
const { addIconSelectors, addDynamicIconSelectors } = require('@iconify/tailwind');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // addIconSelectors(['mdi', 'mdi-light']),
    addDynamicIconSelectors()
  ],
};
export default config;
