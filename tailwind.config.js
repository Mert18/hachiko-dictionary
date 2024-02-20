/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["--font-ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#4D7E3E",
          100: "#6BA45D",
          200: "#8BC573",
          300: "#AED18A",
          400: "#D2EFA0",
        },
        secondary: {
          DEFAULT: "#7E3E8A",
          100: "#9D5B9D",
          200: "#BB79BB",
          300: "#D897D8",
          400: "#F6B4F6",
        },
        white: {
          DEFAULT: "#F9F9F9",
          100: "#EBEBEB"
        },
        black: {
          DEFAULT: "#333333",
          darker: "#000000",
        },
        error: "#9A2020",
        warning: "#D6A909",
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
