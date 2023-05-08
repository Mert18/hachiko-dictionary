/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        soft: "#F9F9F9",
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
