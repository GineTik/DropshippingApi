import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        disappear: {
          "0%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        hidden: {
          "0%": { visibility: "visible" },
          "100%": { visibility: "hidden" }
        },
        scaleIncrease: {
          "0%": { transform: "scale(.9)", maxHeight: "0px" },
          "100%": { transform: "scale(1)", maxHeight: "10000px" }
        },
        scaleDownsize: {
          "0%": { transform: "scale(1)", maxHeight: "10000px" },
          "100%": { transform: "scale(.7)", maxHeight: "0px" }
        }
      },
      animation: {
        disappear: "disappear 1000ms ease-in-out",
        show: "show 150ms ease-in-out",
        showWithScale: "show 150ms ease-in-out, scaleIncrease 150ms ease-in-out",
        hiddenWithDownsize: "hidden 150ms ease-in-out, scaleDownsize 150ms ease-in-out"
      }
    },
  },
  plugins: [],
};
export default config;
