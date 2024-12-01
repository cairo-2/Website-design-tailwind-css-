/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'nav_from':'#344657',
        'nav_to':'#0C1014',
        'nav_text_color':'#9eafc0',
      }
    },
  },
  plugins: [],
}

