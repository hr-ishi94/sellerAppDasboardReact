/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontSize:{
        'lg':'1.625rem',
        'md':'1.125rem'
      },
      fontFamily:{
        roboto:['roboto']
      }
    },
  },
  plugins: [],
}

