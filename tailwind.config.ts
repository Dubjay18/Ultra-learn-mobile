/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#3D5CFF",
          background: {
          DEFAULT: "#F0F0F0",
            dark: "#1F1F39",
            }
        },
            secondary: {
            DEFAULT: "#E2E2D5",
            dark: "#888883",
            },
        },
        fontFamily: {
            body: ["Nunito"],
    },
  },
  plugins: [],
};