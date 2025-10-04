"use client"

import { Component } from "react"
import DualMarquee from "../layout/DualMarquee"
import { FaUser, FaLaptopCode, FaLightbulb, FaHandsHelping } from "react-icons/fa"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { visitCount: 0 }
  }

  componentDidMount() {
    const visits = localStorage.getItem("aboutVisits") || 0
    const newVisitCount = Number.parseInt(visits) + 1
    localStorage.setItem("aboutVisits", newVisitCount)
    this.setState({ visitCount: newVisitCount })
  }

  render() {
    const { visitCount } = this.state

    return (
      <section id="about" className="min-h-screen py-20 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <DualMarquee word1="ABOUT" word2="ME" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              I'm a BSIT student at Central Luzon State University and an aspiring full-stack developer. Visit #{visitCount}
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Column: Image */}
            <div className="flex justify-center lg:justify-start flex-1">
              <img
                src="/src/profile.png"
                alt="About Me"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-2xl shadow-xl z-20"
              />
            </div>

            {/* Right Column: Info */}
            <div className="flex-1 flex flex-col gap-6 w-full">
              {/* My Story */}
              <div className="glass-card bg-background/80 backdrop-blur-md border-b p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FaUser /> My Story
                </h3>
                <p className="text-muted-foreground mb-4">
                  I’m a 4th-year BSIT student and aspiring full-stack web developer. My portfolio showcases my growing abilities in web development as I refine and expand my skills.
                </p>
                <p className="text-muted-foreground">
                  I focus on creating thoughtful and functional web solutions, combining clean code, responsive design, and user-centered interfaces.
                </p>
              </div>

              {/* Motto */}
              <div className="glass-card bg-background/80 backdrop-blur-md border-b p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FaLightbulb /> Motto
                </h3>
                <p className="text-muted-foreground text-sm leading-6">
                  "If I have something to do today, I will do it now. To do something else tomorrow."
                </p>
              </div>

              {/* Core Values */}
              <div className="glass-card bg-background/80 backdrop-blur-md border-b p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaHandsHelping /> Core Values
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2"><FaLaptopCode className="text-primary" /> Clean & maintainable code</li>
                  <li className="flex items-center gap-2"><FaUser classNameb="text-primary" /> User-centered design</li>
                  <li className="flex items-center gap-2"><FaLightbulb className="text-primary" /> Continuous learning</li>
                  <li className="flex items-center gap-2"><FaHandsHelping className="text-primary" /> Collaboration & productivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
