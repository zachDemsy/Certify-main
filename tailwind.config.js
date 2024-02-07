/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      SignikaNegative: ["Signika Negative", "cursive"],
      WorkSans: ["Work Sans", "cursive"],
    },
    extend: {},
  },
  plugins: [],
}