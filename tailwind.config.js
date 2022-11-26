/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav': "linear-gradient(180deg, rgba(36, 60, 106, 0.9) 0%, rgba(125, 32, 233, 0.9) 100%)",
        'banner': "linear-gradient(180deg, #8437E3 0%, #02D5CE 100%)",
      },
      boxShadow: {
        'a-l': '4px 0px 6px -4px rgba(0,0,0,0.25)',
        'a-r': '-4px 0px 6px -4px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
