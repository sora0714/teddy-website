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
        "0xl":"0px",
        "1xl":"1100px",
        "2xl":'1500px',
        "3xl": "1920px",
        "1ml":"430px",
        "2ml": "970px",
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
