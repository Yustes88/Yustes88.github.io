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
        'coffee-1': '#7A5C52',
        'coffee-2': '#674A41',
        DEFAULT: '#5D3937',
        lion: '#C39A76',
        coyote: '#746451',
        noir: '#4D3C29',
        chamoisee: '#8B7961',
        'light-1': '#967E6C',
        'light-2': '#EAE1D3',
        'light-3': '#ffecec',
        'taupe-1': '#534032',
        'taupe-2': '#403428',

      },
      'red': {
        madder: '#A90423',
        rusty: '#C83C4B',
      }, 
      'green': {
        moss: '#858E69',
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
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],

}
