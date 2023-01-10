/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
      signature: ["Pacifico"],
    },
  },
  plugins: [],
};
