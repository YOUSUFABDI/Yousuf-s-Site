import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkBg: "#111111",
        lightBg: "#FCFCFC",
        hoverDark: "#222222",
        projectBg: "#282828",
      },
      colors: {
        darkPrimary: "#EEEEEE",
        darkSecondary: "#B4B4B4",
        lightPrimary: "#202020",
        lightSecondary: "#646464",
        hoverLight: "#F0F0F0",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
