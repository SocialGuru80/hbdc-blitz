/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffd700',
        accent: '#ffb300',
        'gold-dark': '#daa520',
        text: '#333333',
        light: '#ffffff',
        surface: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};