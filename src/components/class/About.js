"use client"

import { Component } from "react"

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
    // Simulate visit tracking
    const visits = localStorage.getItem("aboutVisits") || 0
    const newVisitCount = Number.parseInt(visits) + 1
    localStorage.setItem("aboutVisits", newVisitCount)
    this.setState({ visitCount: newVisitCount })

    console.log("[v0] About component mounted, visit count:", newVisitCount)
  }

  handleSkillClick = (skill) => {
    console.log("[v0] Skill clicked:", skill)
    this.setState({
      activeSkill: this.state.activeSkill === skill ? null : skill,
      isAnimating: true,
    })

    // Reset animation state
    setTimeout(() => {
      this.setState({ isAnimating: false })
    }, 300)
  }

  handleSkillHover = (skill) => {
    console.log("[v0] Skill hovered:", skill)
  }

  render() {
    const { activeSkill, visitCount, isAnimating } = this.state

    const skills = [
      {
        name: "Healthcare Technology",
        level: 95,
        description: "Specialized in medical applications and patient care systems.",
      },
      { name: "React Development", level: 90, description: "Building modern, responsive user interfaces." },
      { name: "Node.js", level: 85, description: "Server-side development and API creation." },
      { name: "Database Design", level: 80, description: "Efficient data storage and retrieval systems." },
      { name: "AI/ML Integration", level: 75, description: "Implementing intelligent features in applications." },
      { name: "Mobile Development", level: 70, description: "Cross-platform mobile applications." },
    ]

    return (
      <section id="about" className="min-h-screen py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Baymax</h2>
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
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Patient-centered design</li>
                  <li>• Accessible technology</li>
                  <li>• Continuous learning</li>
                  <li>• Helping others through code</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => this.handleSkillClick(skill.name)}
                      onMouseEnter={() => this.handleSkillHover(skill.name)}
                      className={`font-medium hover:text-primary transition-colors ${
                        isAnimating && activeSkill === skill.name ? "scale-105" : ""
                      }`}
                    >
                      {skill.name}
                    </button>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500 baymax-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  {activeSkill === skill.name && (
                    <p className="text-sm text-muted-foreground mt-2 animate-fade-in">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
