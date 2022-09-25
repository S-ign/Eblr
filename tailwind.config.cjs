/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'eblr-blue': '#001935',
        'eblr-outline': '#21374F',
        'eblr-search': '#405368',
        'edit-bg': '#00B8FF',
      },
      backgroundImage: {
        'searchIcon': "url('/src/assets/search-icon.png')",
      },
      fontFamily: {
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
};
