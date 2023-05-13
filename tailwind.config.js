/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      fontFamily: {
        ubuntu: ["--font-ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#679186",
          100: "#79A096",
          200: "#8CADA5",
          300: "#9FBBB4",
          400: "#E7EFED",
        },
        secondary: {
          DEFAULT: "#916772",
          100: "#A07983",
          200: "#AD8C95",
          300: "#BB9FA7",
          400: "#EADEE1",
        },
        white: "#F9F9F9",
        black: {
          DEFAULT: "#333333",
          darker: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
