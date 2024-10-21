/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit,minmax(200px,1fr))'
    },
    animation: {
      spin_slow: "spin 6s linear infinite",
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

