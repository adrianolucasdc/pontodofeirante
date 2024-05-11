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
        secundaryColor: "#FEB400",
        thirdColor: "#EA5454",
        lightColor: "#FFFFFF",
        lightColorGray: "#858585",
        lineColor: "#D9D9D9",
        linkColor: "#0000ff"
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

