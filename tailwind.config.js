/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('./assets/bg1.jpeg')",
      },
    }
  },
  plugins: [],
}