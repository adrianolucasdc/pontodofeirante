/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#F8F8F7",
        primaryColor: "#2C4059",
        lightColor: "#FFFFFF"
      }
    },
  },
  plugins: [],
}