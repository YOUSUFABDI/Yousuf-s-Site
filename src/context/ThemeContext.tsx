import React, { createContext, useContext, useState, useEffect } from 'react'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null

    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const values = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const contex = useContext(ThemeContext)

  if (contex === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }

  return contex
}
