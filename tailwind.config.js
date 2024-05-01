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
        red: {
          DEFAULT: "#D23D2D",
          lighter: "#E75E50",
        },
        beige: {
          DEFAULT: "#F8EECB",
        },
        yellow: {
          DEFAULT: "#F5C065",
        },
        green: {
          DEFAULT: "#31603D",
        },
        brown: {
          DEFAULT: "#6E433D",
        },
        white: {
          DEFAULT: "#EFEFEF",
        },
      }
    },
  },
  plugins: [],
};
