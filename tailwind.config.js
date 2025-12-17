/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
// export default {
//   content: [
//     "./resources/**/*.blade.php",
//     "./resources/**/*.js",
//     "./resources/**/*.vue",
//     "../../node_modules/preline/variants.css",
//     "../../node_modules/preline/dist/*.js",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: ["@tailwindcss/forms"],
// }
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",

    // Preline JS components
    "./node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ...colors, // ✅ keeps red, blue, gray, etc.
    },
  },
  plugins: [],
}

