/** @type {import('tailwindcss').Config} */

const primaryBaseColor = "#343540";
const secondaryBaseColor = "#e9d353";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primaryBaseColor,
          50: "#f6f7ff",
          100: "#eeeffd",
          200: "#e3e4f2",
          300: "#d2d3e1",
          400: "#aeaebc",
          500: "#8d8e9b",
          600: "#656673",
          700: "#52535f",
          800: primaryBaseColor,
          900: "#14151f",
        },
        secondary: {
          DEFAULT: secondaryBaseColor,
          50: "#fcfce9",
          100: "#f8f7c9",
          200: "#f4f1a6",
          300: "#f0ec85",
          400: "#ede76d",
          500: "#eae258",
          600: secondaryBaseColor,
          700: "#e5bc4a",
          800: "#e1a640",
          900: "#d98231",
        },
        error: "#B00020",
        bgColor: "#434654",
      },
    },
  },
  plugins: [],
};
