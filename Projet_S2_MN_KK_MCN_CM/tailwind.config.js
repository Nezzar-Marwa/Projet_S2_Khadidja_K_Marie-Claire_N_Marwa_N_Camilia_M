/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
      toniccolor: '#ff9c40',
      backgroundcolor: '#f5f5f5',
      contrastcolor: '#2c2b2b',
      contentbluelayout: '#2f8a99',
      green: '#2c2c2c',
      text: '#000000',
      contentbluecards: '#8ecdd7',
      teamcolor: '#434343'
     },
     fontFamily: {
       sans: ['Jost', sans-serif],
       sans: ['poppins', sans-serif]
     },
    extend: {},
  },
  plugins: [],
}

