/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy-800': '#1E3A8A',
        'orange-500': '#F97316',
        'blue-500': '#3B82F6',
        'blue-400': '#60A5FA',
        'blue-300': '#93C5FD',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
