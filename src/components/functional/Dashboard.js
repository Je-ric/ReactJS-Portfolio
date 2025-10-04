import React, { useEffect } from "react"

function Dashboard() {
  useEffect(() => {
    function handleShortcut(event) {
    }

    window.addEventListener("keydown", handleShortcut)
    return () => window.removeEventListener("keydown", handleShortcut)
  }, [])

  return (
    <section
      id="dashboard"
      className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="container mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center">
          <img
            src="/src/profile.png"
            alt="Profile Avatar"
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Hello, I am Baymax
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Your personal healthcare companion turned web developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
