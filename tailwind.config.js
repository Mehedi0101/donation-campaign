/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': '#FF444A',
        'primary2': '#009444',
        'dark1': '#0B0B0B',
        'dark2': '#0b0b0bb3',
      }
    },
  },
  plugins: [],
}