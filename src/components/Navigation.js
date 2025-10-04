"use client"
import { useState } from "react"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "./ThemeProvider"

const Navigation = ({ currentSection, onSectionChange }) => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onSectionChange(sectionId)
      setMenuOpen(false) // close on mobile
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="text-3xl font-bold text-primary tracking-wider">
            {"</>"}
          </h3>
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
          <button onClick={toggleTheme} className="px-4 py-2 rounded-full hover:bg-secondary" aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
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
          <button onClick={toggleTheme} className="px-4 py-2 rounded-full hover:bg-secondary" aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navigation
