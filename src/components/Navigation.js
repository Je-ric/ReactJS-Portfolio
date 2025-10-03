"use client"
import { useState } from "react"
import { useTheme } from "./ThemeProvider"

const Navigation = ({ currentSection, onSectionChange }) => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onSectionChange(sectionId)
      setMenuOpen(false) // close menu on mobile
    }
  }

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

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                currentSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="px-4 py-2 rounded-full hover:bg-secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-5"
          >
            <span className="block h-0.5 w-full bg-primary transition-transform duration-300" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "rotate(0)" }}></span>
            <span className={`block h-0.5 w-full bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className="block h-0.5 w-full bg-primary transition-transform duration-300" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "rotate(0)" }}></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md border-t flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                currentSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="px-4 py-2 rounded-full hover:bg-secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navigation
