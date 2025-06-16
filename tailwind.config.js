/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat'],
        'roboto': ['roboto']
      },
      colors: {
        'splash-grey': '#A8A8A9',
        'textbg-grey': '#F3F3F3'
      }
    },
  },
  plugins: [],
}