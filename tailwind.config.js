/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'brown': {
        DEFAULT: '#612F18',
        'light-1': '#967E6C',
        'light-3': '#ffecec',
        'row': '#91695333',

      },
      'red': {
        madder: '#A90423',
        rusty: '#C83C4B',
      }, 
      'green': {
        DEFAULT: '#4dc0a5',
      },
      'dark': {
        'dark-purple': '#210F1F',
        'van-duke': '#3D3034',
      },
      'gray': {
        outer: '#41454A',
        light: '#777B7C',
        davy: '#5C5855',
        battleship: '#958B81',

      }
    },
    fontFamily: {
      'body': ['Roboto Slab'],
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],

}
