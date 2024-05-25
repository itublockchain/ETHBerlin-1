/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#222831",
        secondary: "#393E46",
        ternary: "#8A39F0",
        quaternary: "#EEEEEE",
        "green-primary": "#00FF29",
        primary: "#288AE4"
      }
    }
  },
  plugins: []
}
