import { useTheme } from '../context/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</button>
  )
}

export default ThemeSwitcher
