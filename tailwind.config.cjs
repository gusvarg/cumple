/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elegant-black': '#212529',
        'soft-gray': '#f8f9fa',
        'vibrant-lime': '#c4ff4d',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
