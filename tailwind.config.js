/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        darkBg: '#111111',
        lightBg: '#FCFCFC',
        hoverDark: '#222222',
        projectBg: '#282828',
      },
      colors: {
        darkPrimary: '#EEEEEE',
        darkSecondary: '#B4B4B4',
        lightPrimary: '#202020',
        lightSecondary: '#646464',
        hoverLight: '#F0F0F0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
