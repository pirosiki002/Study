/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ["./public/**/*.{html,js}"], // HTMLファイルのパスを指定
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
      },
    },
  },
};
