/* eslint-disable @typescript-eslint/no-require-imports */
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
        "gray-100": "#FFFFFF",
        "gray-200": "#D4D4D8",
        "gray-400": "#A1A1AA",
        "gray-600": "#6C6C71",
        "gray-700": "#3F3F46",
        "gray-800": "#27272A",
        "gray-900": "#18181B",
        black: "#000000",
        primary: "#FF53AB",
        "primary-active": "#FF1E91",
        "primary-disabled-100": "#F178B6",
        "primary-disabled-200": "#B53577",
      },
      fontSize: {
        "title-sb-32": [
          "3.2rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "title-sb-28": [
          "2.8rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "title-r-28": [
          "2.8rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "title-sb-22": [
          "2.2rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "title-sb-20": [
          "2rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "title-m-16": [
          "1.6rem",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "button-sb-24": [
          "2.4rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "button-sb-14": [
          "1.4rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-sb-20": [
          "2rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-r-20": [
          "2rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-sb-16": [
          "1.6rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-r-16": [
          "1.6rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-sb-14": [
          "1.4rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "detail-r-14": [
          "1.4rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "label-sb-16": [
          "1.6rem",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "label-r-16": [
          "1.6rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
        "reply-r-14": [
          "1.4rem",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" },
        ],
      },
      screens: {
        pc: "500px",
        mobile: {
          min: "1px",
          max: "499px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
