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
        "gray-0": "#000000",
        "gray-10": "#191919",
        "gray-25": "#404040",
        "gray-60": "#93979B",
        "gray-90": "#E5E5E5",
        "gray-100": "#FFFFFF",
        primary: "#FF53AB",
        "primary-active": "#FF1E91",
        "primary-disabled": "#B53577",
      },
      fontSize: {
        h1: ["3.4rem", { fontWeight: "600", letterSpacing: "-2%" }],
        h2: ["2rem", { fontWeight: "600", letterSpacing: "-2%" }],
        body1: ["1.3rem", { fontWeight: "400", letterSpacing: "-2%" }],
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
