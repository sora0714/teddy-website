import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      container: {
        screens: {
          default: "100%",
          "3xl": "1920px",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
