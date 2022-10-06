/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JS: ['Josefin Sans', 'sans-serif'],
        Paci: ['Pacifico', 'sans-serif'],
        RW: ['Raleway', 'sans-serif'],
        SS: ['Silkscreen', 'cursive'],
        EN: ['Enriqueta', 'serif']
      }
    },
  },
  plugins: [],
}
