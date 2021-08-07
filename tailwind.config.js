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
      yellow:"#f6c23e",
      dark:"#161819",
      lightDark:"#2F3437",
      // label:"#747884",
      label:"#A3B7A7",
      // primary: '#85F9E7',
      primary: '#5A6BF0',
      // secondary:'#66B7DC',
      secondary:'#85F9E7',
      blue:"#6772DC",
      green:"#05D494",
      bgLight: "#F7F8FD",
      violet: "#080A2B"
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
