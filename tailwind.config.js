/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      mobile: '0px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        main: '#ff4d30',
        'text-gray': '#706f7b',
        'second-white': '#f3f3f3',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
