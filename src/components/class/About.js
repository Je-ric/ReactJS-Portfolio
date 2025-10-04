"use client"

import { Component } from "react"
import { FaUser, FaLightbulb, FaHandsHelping } from "react-icons/fa"

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
      <section
        id="about"
        className="min-h-screen flex max-w-7xl mx-auto items-center justify-center px-4 md:px-8 py-12"
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">

          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/3 flex-shrink-0">
            <img
              src="/src/profile.png"
              alt="About Me"
              className="w-64 z-20 sm:w-64 md:w-72 lg:w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Column: Info */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-xl">
            {/* Visit Count */}
            <p className="text-lg text-muted-foreground text-center lg:text-left">
              Visit #{visitCount}
            </p>

            {/* Who Am I */}
            <div className="group p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-opacity-20 flex items-center justify-center">
                  <FaUser className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                  Who Am I
                </h3>
              </div>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                I’m a 4th-year BSIT student and aspiring full-stack web developer. My portfolio showcases my growing abilities in web development as I refine and expand my skills. I focus on creating thoughtful and functional web solutions, combining clean code, responsive design, and user-centered interfaces.
              </p>
            </div>

            {/* Core Values */}
            <div className="group p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 bg-opacity-20 flex items-center justify-center">
                  <FaHandsHelping className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 group-hover:from-purple-300 group-hover:to-pink-400 transition-all">
                  Core Values
                </h3>
              </div>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                I value clean and maintainable code, user-centered design, continuous learning, collaboration, and productivity. I strive to combine these principles in every project I work on to ensure high-quality and impactful solutions.
              </p>
            </div>

            {/* Motto */}
            <div className="group p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 bg-opacity-20 flex items-center justify-center">
                  <FaLightbulb className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 group-hover:from-yellow-300 group-hover:to-red-400 transition-all">
                  Motto
                </h3>
              </div>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                "If I have something to do today, I will do it now. To do something else tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
