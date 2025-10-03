import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

import Navigation from "./components/Navigation";
import Dashboard from "./components/functional/Dashboard";
import Projects from "./components/functional/Projects";
import About from "./components/class/About";
import Contact from "./components/class/Contact";
import Preloader from "./components/Preloader";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";

function App() {
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [showPreloader, setShowPreloader] = useState(true);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["dashboard", "projects", "about", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Render preloader first
  // if (showPreloader) {
  //     return <Preloader onFinish={() => setShowPreloader(false)} />;
  // }

  return (
    <>
    {/*  */}
    <ScrollProgressIndicator />

    {/*  */}
    <ThemeProvider>
      <div className="min-h-screen bg-background">

        {/*  */}
        {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}

        {/*  */}
        <Navigation
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />

        {/*  */}
        <main className="pt-20">
          <Dashboard />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
