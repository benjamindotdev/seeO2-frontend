/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        primary: "#74FF5C",
        secondary: "#D99445",
        accent: "#DE99A3",
        dark: "#283618",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
