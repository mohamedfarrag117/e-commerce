/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brunoAce: ["'Bruno Ace SC'", "sans-serif"],
      },
      backgroundImage: {
        "sale-bg": "url('./src/assets/images/saless.png')",
        "sale-phone": "url('./src/assets/images/salebgmobile.png')",
        "title-bg": "url('./src/assets/images/titleshoppingred.png')",
      },
    },
  },
  plugins: [],
};
