/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      darkBG: "#1e2227",
      darkHover: "#2c313a",
      lightBG: "#f8f8f8",
      lightHover: "#f2f2f2",
      header:"#282c34"
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
