/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors: {
      primary: "#1A2741", 
      secondary: "#FCC741", 
      accent: "#F7F8FA", 
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      open: ["Montserrat", 'sans-serif'], 
    },
    },
  },
  plugins: [],
}