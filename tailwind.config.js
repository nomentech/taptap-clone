/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f5f7f8',
        'primary-color': '#15c5ce',
        'custom-black': '#1d2127'
      },
      screens: {
        'xs': '499px',  
        'sm': '688px',
        'md': '996px',  
        'lg': '1024px',
        'xl': '1220px',
        '2xl': '1280px'
      },
    },
  },
  plugins: [],
}
