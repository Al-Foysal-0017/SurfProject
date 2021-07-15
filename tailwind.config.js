const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      // yellow: colors.amber,
      dark:"#161819",
      lightDark:"#2F3437",
      label:"#747884",
      primary: '#85F9E7',
      secondary:'red',
      yellow:"#f6c23e",
    },
    height: {
      navHeight: '70px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
