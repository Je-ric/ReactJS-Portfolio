"use client"
import { useTheme } from "./ThemeProvider"

const Navigation = ({ currentSection, onSectionChange }) => {
  const { theme, toggleTheme, baymaxMode, changeBaymaxMode } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onSectionChange(sectionId)
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
          <span className="font-bold text-xl">Baymax Portfolio</span>
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
          <select
            value={baymaxMode}
            onChange={(e) => changeBaymaxMode(e.target.value)}
            className="px-3 py-1 rounded bg-secondary text-sm"
          >
            <option value="normal">Normal</option>
            <option value="healthcare">Healthcare</option>
            <option value="developer">Developer</option>
          </select>

          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
