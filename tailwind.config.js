/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        activeColor: '#6C63FF',
        darkColor: '#0F172A',
        headerColor: '#101827',
        darkTxtColor: '#1E293B',
        lightColor: '#F2F2F2',
      },
      fontFamily: {
        montosra: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
