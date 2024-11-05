/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rawline', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem', // Adjust this value as needed
      },
    },
  },
  plugins: [],
}