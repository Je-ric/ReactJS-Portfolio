import { useState, useEffect } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import Navigation from "./components/Navigation"
import Dashboard from "./components/functional/Dashboard"
import Projects from "./components/functional/Projects"
import About from "./components/class/About"
import Contact from "./components/class/Contact"

function App() {
  const [currentSection, setCurrentSection] = useState("dashboard")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = ["dashboard", "projects", "about", "contact"]
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-full baymax-float mx-auto"></div>
          <p className="text-muted-foreground">Initializing Baymax...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />

        <main className="pt-20">
          <Dashboard />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
