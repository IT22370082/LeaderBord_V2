module.exports = {
  content: [
    "./src//*.tsx",
    "./src//*.ts",
    ".//*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}