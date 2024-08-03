/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D5CFF",
        background: {
          DEFAULT: "#F0F0F0",
          dark: "#1F1F39",
          foreground: "#FFFF",
        },
        secondary: {
          DEFAULT: "#E2E2D5",
          dark: "#888883",
          foreground: "#F0F0F0",
        },
        accent:{
          DEFAULT: "#FF6905",
          dark: "#FF3D5C",
          foreground: "#FFFF",
        }
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
  plugins: [],
};
