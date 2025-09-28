"use client"

import React, { useState } from "react"
import { useTheme } from "../ThemeProvider"

const Dashboard = () => {
  const [healthStatus, setHealthStatus] = useState("Optimal")
  const [scanCount, setScanCount] = useState(0)
  const { baymaxMode } = useTheme()

  const performHealthScan = () => {
    console.log("[v0] Health scan initiated")
    setHealthStatus("Scanning...")
    setScanCount((prev) => prev + 1)

    setTimeout(() => {
      const statuses = ["Optimal", "Good", "Excellent", "Perfect"]
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
      setHealthStatus(randomStatus)
      console.log("[v0] Health scan completed:", randomStatus)
    }, 2000)
  }

  // Keyboard shortcut for health scan
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault()
        performHealthScan()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  const getModeContent = () => {
    switch (baymaxMode) {
      case "healthcare":
        return {
          title: "Healthcare Companion Dashboard",
          subtitle: "Your personal healthcare assistant",
          description: "I am Baymax, your personal healthcare companion. I will scan you now.",
        }
      case "developer":
        return {
          title: "Developer Portfolio System",
          subtitle: "Full-stack development capabilities",
          description: "Advanced programming protocols activated. Ready to code.",
        }
      default:
        return {
          title: "Welcome to My Portfolio",
          subtitle: "Hello, I am Baymax",
          description: "Your personal healthcare companion turned web developer.",
        }
    }
  }

  const content = getModeContent()

  return (
    <section id="dashboard" className="min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">{content.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">{content.subtitle}</p>
          <p className="text-lg max-w-2xl mx-auto">{content.description}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div
            className="w-32 h-32 bg-primary rounded-full baymax-inflate cursor-pointer hover:scale-110 transition-transform"
            onClick={performHealthScan}
            onMouseEnter={() => console.log("[v0] Baymax character hovered")}
          >
            <div className="w-full h-full flex items-center justify-center text-4xl">🤖</div>
          </div>

          <div className="space-y-4">
            <div className="baymax-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Health Status</h3>
              <p className="text-2xl font-bold text-primary">{healthStatus}</p>
              <p className="text-sm text-muted-foreground">Scans performed: {scanCount}</p>
            </div>

            <button
              onClick={performHealthScan}
              onDoubleClick={() => {
                console.log("[v0] Double-click detected on health scan")
                alert("Emergency scan protocol activated!")
              }}
              className="baymax-button bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90"
            >
              Perform Health Scan (Ctrl+H)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
