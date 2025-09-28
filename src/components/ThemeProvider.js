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
  const [theme, setTheme] = useState("light")
  const [baymaxMode, setBaymaxMode] = useState("normal") // normal, healthcare, developer

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    const savedMode = localStorage.getItem("baymaxMode") || "normal"
    setTheme(savedTheme)
    setBaymaxMode(savedMode)

    document.documentElement.classList.toggle("dark", savedTheme === "dark")
    document.body.className = savedMode === "normal" ? "" : `${savedMode}-mode`
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const changeBaymaxMode = (mode) => {
    setBaymaxMode(mode)
    localStorage.setItem("baymaxMode", mode)
    document.body.className = mode === "normal" ? "" : `${mode}-mode`
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        baymaxMode,
        changeBaymaxMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
