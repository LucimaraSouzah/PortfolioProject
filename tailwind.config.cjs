/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: {
          logo: '#E0AFA0'
        }
      },
    },
  },
  plugins: [],
}