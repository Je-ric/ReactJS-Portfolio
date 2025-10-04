import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css"
import "./index.css"

import Navigation from "./components/Navigation";
import Home from "./components/functional/Home";
import Projects from "./components/functional/Projects";
import About from "./components/class/About";
import Contact from "./components/class/Contact";
import Preloader from "./components/Preloader";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import BackToTop from "./components/BackToTop";
import Mouse from "./components/Mouse";
import GlobalBG from "./components/ui/GlobalBG";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
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

    const sections = ["home", "projects", "about", "contact"];
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
    <GlobalBG />

    {/*  */}
    <ScrollProgressIndicator />

    {/*  */}
    <ThemeProvider>
      <div className="min-h-screen bg-background">

        {/*  */}
        {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}

        <Mouse />
        {/*  */}
        <Navigation
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />

        {/*  */}
        <main className="pt-20">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <BackToTop />
      </div>

  
    </ThemeProvider>
    </>
  );
}

export default App;
