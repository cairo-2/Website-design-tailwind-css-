/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body_bg: "#f2f4f7",
      },
      fontFamily:{
        body_font:['Roboto']
      }
    },
  },
  plugins: [],
}

