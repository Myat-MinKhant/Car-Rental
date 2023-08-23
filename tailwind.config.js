/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff4d30',
        'text-gray': '#706f7b',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
