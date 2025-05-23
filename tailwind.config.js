/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px,1fr))'
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors : {
        lightHover : "#fcf4ff",
        darkHover : "#2a004a",
        darkTheme : "#11001F",
      },
      boxShadow : {
        "black" : "4px 4px 0 #000",
        "white" : "4px 4px 0 #fff",
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

