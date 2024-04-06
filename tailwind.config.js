/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      }
    },
  },
  plugins: [],
};
