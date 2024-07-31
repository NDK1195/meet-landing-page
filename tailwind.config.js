/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "4D96A9": "#4D96A9",
        "855FB1": "#855FB1",
        "28283D": "#28283D",
        "87879D": "#87879D",
        "8FE3F9": "#8FE3F9",
        D9B8FF: "#D9B8FF",
        FAFAFA: "#FAFAFA",
      },
      backgroundImage: {
        "mobile-footer": 'url("../assets/mobile/image-footer.jpg")',
      },
    },
  },
  plugins: [],
};
