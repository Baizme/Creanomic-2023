/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    // container: {
    //   center: true,
    //   padding: "0px",
    // },
    extend: {
      backgroundImage: {
        exhibition_bg: "url('/public/img/Coba Background.png')",

        Home_bg: "url('/public/img/Home.png')",
      },
      colors: {
        purple: "#6C3077",
        pink: "#A73284",
        orange: "#EC5A2C",
      },
      fontFamily: {
        dsd: ["DM Serif Display"],
        manrope: ["manrope"],
      },
      screens: {
        "2xl": "1350px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
