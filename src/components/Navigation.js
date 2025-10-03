"use client"

/*
  File: Navigation.js
  What it is: A functional component that renders the top navigation bar.
  How it works: Uses props (`currentSection`, `onSectionChange`) to highlight the active section and to
  communicate user intent upward when a nav item is clicked. It also consumes context values from
  `ThemeProvider` via the `useTheme` hook to show and toggle theme and a custom "Baymax mode".

  Concepts demonstrated:
  - Functional component (React function returning JSX)
  - Props: `currentSection` (string), `onSectionChange` (function callback)
  - Event handling: button `onClick` scrolls and notifies parent; select `onChange` updates context
  - Context usage: `useTheme` provides `theme`, `toggleTheme`, `baymaxMode`, `changeBaymaxMode`
*/
import { useTheme } from "./ThemeProvider"

const Navigation = ({ currentSection, onSectionChange }) => {
  const { theme, toggleTheme } = useTheme()

  // Event handler: scroll to a section and inform parent about the change via prop callback
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onSectionChange(sectionId)
    }
  }

  // Local data used to render buttons. `currentSection` determines which one is styled as active
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full baymax-glow"></div>
          <span className="font-bold text-xl">Portfolio</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                currentSection === item.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">

          {/* Simple button toggling theme via context function */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
