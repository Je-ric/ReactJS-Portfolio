"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark") // default

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const savedMode = localStorage.getItem("baymaxMode") || "normal"
    const initialTheme = savedTheme || "dark"
    setTheme(initialTheme)

    document.documentElement.classList.toggle("dark", initialTheme === "dark")
    document.body.className = savedMode === "normal" ? "" : `${savedMode}-mode`
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
