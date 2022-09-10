const defaultTheme = require('tailwindcss/defaultTheme')
const pxToRem = (dest) => 1 / (16 / dest)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: `${pxToRem(320)}rem`,
      sm: `${pxToRem(576)}rem`,
      md: `${pxToRem(768)}rem`,
      lg: `${pxToRem(1024)}rem`,
      xl: `${pxToRem(1380)}rem`,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        0: '#FFFFFF',
        50: '#E2E2E2',
        600: '#606060',
        800: '#222222',
        900: '#171717',
        1000: '#000000',
      },
    },
    spacing: {
      auto: 'auto',
      full: '100%',
      0: '0',
      1: `${pxToRem(4)}rem`,
      2: `${pxToRem(6)}rem`,
      3: `${pxToRem(8)}rem`,
      4: `${pxToRem(12)}rem`,
      5: `${pxToRem(16)}rem`,
      5.5: `${pxToRem(20)}rem`,
      6: `${pxToRem(24)}rem`,
      7: `${pxToRem(32)}rem`,
      7.5: `${pxToRem(40)}rem`,
      8: `${pxToRem(48)}rem`,
      8.5: `${pxToRem(52)}rem`,
      9: `${pxToRem(64)}rem`,
      9.5: `${pxToRem(80)}rem`,
      10: `${pxToRem(96)}rem`,
      10.5: `${pxToRem(104)}rem`,
      11: `${pxToRem(128)}rem`,
      12: `${pxToRem(192)}rem`,
    },
    fontFamily: {
      urw: ['"Urw"', defaultTheme.fontFamily.sans],
    },
    fontSize: {
      0: '0',
      50: [`${pxToRem(8)}rem`],
      100: [`${pxToRem(13)}rem`],
      200: [`${pxToRem(16)}rem`],
      300: [`${pxToRem(21)}rem`],
      400: [`${pxToRem(26)}rem`],
      500: [`${pxToRem(32)}rem`],
      600: [`${pxToRem(38)}rem`],
      700: [`${pxToRem(56)}rem`],
      800: [`${pxToRem(76)}rem`],
      900: [`${pxToRem(96)}rem`],
    },
    extend: {},
  },
  plugins: [],
}
