/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme/layout/**/*.liquid",
    "./theme/sections/**/*.liquid",
    "./theme/snippets/**/*.liquid",
    "./theme/templates/**/*.liquid",
  ],
  theme: {
    fontFamily: {
      avenir: ['"Avenir"'],
      ubuntulife: ['"Ubuntu Life"'],
    },
    extend: {
      animation: {
        "slide-in-h": "slide-in-h 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "slide-in-h": {
          "0%": {
            opacity: 0,
            left: "-180px",
          },
          "100%": {
            opacity: 1,
            left: "0px",
          },
        },
      },
      colors: {
        candy: {
          50: "#fef3ee",
          100: "#fde4d7",
          200: "#fac5ae",
          300: "#f69c7b",
          400: "#f0613b",
          500: "#ed4422",
          600: "#de2c18",
          700: "#b81e16",
          800: "#931b19",
          900: "#761918",
        },
        downy: {
          50: "#f2fbfa",
          100: "#d4f3f1",
          200: "#a8e7e4",
          300: "#60cdcb",
          400: "#48b7b9",
          500: "#2e9b9e",
          600: "#23797e",
          700: "#206065",
          800: "#1d4f52",
          900: "#1c4245",
        },
        whiteLinen: {
          50: "#fdfaf7",
          100: "#f8f1e8",
          200: "#ead6be",
          300: "#ddb894",
          400: "#ce9569",
          500: "#c47c4b",
          600: "#b66740",
          700: "#985236",
          800: "#7a4332",
          900: "#63382b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
