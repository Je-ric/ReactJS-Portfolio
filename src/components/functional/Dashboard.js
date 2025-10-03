import React from "react"
import { useTheme } from "../ThemeProvider"
import Silk from "../ui/Silk"

const Dashboard = () => {
  const { baymaxMode } = useTheme()

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  const getModeContent = () => {
    switch (baymaxMode) {
      default:
        return {
          title: "Welcome to My Portfolio",
          subtitle: "Hello, I am Baymax",
          description:
            "Your personal healthcare companion turned web developer.",
        }
    }
  }

  const content = getModeContent()

  return (
    <section
      id="dashboard"
      className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#29adff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

  
      {/* Foreground Content */}
      <div className="container mx-auto text-center space-y-8 relative z-10">
         {/* Profile Image */}
  <div className="flex justify-center">
    <img
      src="/src/profile.png"   
      alt="Baymax Avatar"
      className="w-40 h-40 rounded-full shadow-lg object-cover"
    />
  </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">{content.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {content.subtitle}
          </p>
          <p className="text-lg max-w-2xl mx-auto">{content.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
