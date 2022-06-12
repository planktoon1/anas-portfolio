const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'gray': colors.gray,
      'primary': '#2B7CB4',
      'text': '#353535',
      'text-primary': '#DBFFFF',
      'background': {
        1: '#ffffff',
        2: '#EEEEEE',
        3: '#CCCCCC',
      },

    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
