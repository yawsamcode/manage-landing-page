/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88% 59%)',
        brightRedLight: 'hsl(12, 88% 69%)',
        darkRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '(228, 39%, 23%)', 
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)', 
        veryPaleRed: 'hsl(113, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)' 
      }
    },
  },
  plugins: [],
}

