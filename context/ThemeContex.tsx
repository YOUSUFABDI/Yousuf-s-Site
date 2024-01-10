"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type Theme = "light" | "dark" | "automatic"

type ThemeContextType = {
  theme: Theme
  darkMode: () => void
  lightMode: () => void
  autoMode: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light")

  const darkMode = () => {
    setTheme("dark")
    window.localStorage.setItem("theme", "dark")
    document.documentElement.classList.add("dark")
  }

  const lightMode = () => {
    setTheme("light")
    window.localStorage.setItem("theme", "light")
    document.documentElement.classList.remove("dark")
  }

  const autoMode = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("automatic")
      window.localStorage.setItem("theme", "automatic")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null
    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark")
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("automatic")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const values = {
    darkMode,
    lightMode,
    autoMode,
    theme,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context
}
