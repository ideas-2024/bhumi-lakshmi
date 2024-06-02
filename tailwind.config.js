const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

