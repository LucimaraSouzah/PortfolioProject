/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          logo: "#E0AFA0",
        },
      },
      screens: {
        sm: { max: "767px" },

        md: { min: "768px", max: "1023px" },

        lg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
