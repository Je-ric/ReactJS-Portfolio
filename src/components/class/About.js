"use client"

/*
  File: class/About.js
  What it is: A Class Component that renders the About section.
  How it works: Manages its own state inside a class (`this.state`) and updates it using
  `this.setState`. Demonstrates lifecycle (`componentDidMount`) for reading/writing localStorage.
  Also demonstrates event handling via class field arrow methods bound to the instance.

  Concepts demonstrated:
  - Class component with constructor and `render()`
  - State: `activeSkill`, `visitCount`, `isAnimating`
  - Lifecycle: `componentDidMount` side effect and localStorage persistence
  - Event handling: `handleSkillClick`, `handleSkillHover`
*/

import { Component } from "react"
import ScrambledText from '../ui/ScrambledText';
import SectionTitle from '../layout/SectionTitle';

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, useGLTF } from "@react-three/drei"

// function DreamComputer() {
//   const { scene } = useGLTF("/models/dream_computer_setup.glb") 
//   return <primitive object={scene} scale={0.5} />
// }

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSkill: null,
      visitCount: 0,
      isAnimating: false,
    }
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

      <section id="about" className="min-h-screen py-20 px-8">
        {/* <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <DreamComputer />
        <OrbitControls enableZoom={true} />
      </Canvas> */}
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <SectionTitle text="About Me" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From healthcare companion to full-stack developer. Visit #{visitCount}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="baymax-card p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <p className="text-muted-foreground mb-4">
                  Originally designed as a personal healthcare companion, I have evolved to become a skilled web
                  developer specializing in healthcare technology solutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  My programming is focused on creating applications that improve people's lives, combining my
                  healthcare background with modern web development practices.
                </p>
                <p className="text-muted-foreground">
                  I am satisfied with my care. But I am even more satisfied with my code.
                </p>
              </div>

              <div className="baymax-card p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Quote</h3>
                <p className="text-muted-foreground text-sm leading-5">
                        <ScrambledText
                          className="scrambled-text-demo"
                          radius={100}
                          duration={1.2}
                          speed={0.5}
                          scrambleChars=".:"
                        >
                          "If I have something to do today, I will do it now. To do something else tomorrow"
                        </ScrambledText>
                </p>
              </div>

              <div className="baymax-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Patient-centered design</li>
                  <li>• Accessible technology</li>
                  <li>• Continuous learning</li>
                  <li>• Helping others through code</li>
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
