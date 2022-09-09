const defaultTheme = require("tailwindcss/defaultTheme");
const pxToRem = (dest) => 1 / (16 / dest);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      urw: ['"Urw"', defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
