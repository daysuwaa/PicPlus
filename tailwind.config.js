/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        customFont:['Shrikhand', 'cursive'],
        fontt2:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
