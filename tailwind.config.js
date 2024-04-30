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
        thirdColor: "#EA5454",
        lightColor: "#FFFFFF",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
}