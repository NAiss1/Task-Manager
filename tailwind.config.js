/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // for charts or badges
        priority1: '#fee2e2',
        priority2: '#fef9c3',
        priority3: '#d1fae5',
        priority4: '#bfdbfe',
        priority5: '#f0abfc',
      }
    },
  },
  plugins: [],
}
