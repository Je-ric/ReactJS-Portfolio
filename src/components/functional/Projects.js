"use client"
import { useState } from "react"
import DualMarquee from '../layout/DualMarquee';

const ProjectCard = ({ project, onView }) => (
  <div className="project-card baymax-card p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-muted-foreground mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => console.log("[v0] Technology clicked:", tech)}
        >
          {tech}
        </span>
      ))}
    </div>
    <button
      onClick={() => onView(project)}
      className="baymax-button bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90"
    >
      View Project
    </button>
  </div>
)

const Projects = () => {
  // State controls active filter; changes re-compute `filteredProjects`
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [projects] = useState([
    {
      id: 1,
      title: "Healthcare Management System",
      description: "A comprehensive system for managing patient data and appointments.",
      technologies: ["React", "Node.js", "MongoDB", "Healthcare"],
      category: "healthcare",
    },
    {
      id: 2,
      title: "AI Diagnostic Tool",
      description: "Machine learning application for medical diagnosis assistance.",
      technologies: ["Python", "TensorFlow", "React", "AI"],
      category: "ai",
    },
    {
      id: 3,
      title: "Personal Care App",
      description: "Mobile application for tracking personal health metrics.",
      technologies: ["React Native", "Firebase", "Healthcare"],
      category: "mobile",
    },
    {
      id: 4,
      title: "Medical Research Platform",
      description: "Platform for collaborative medical research and data analysis.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Research"],
      category: "web",
    },
  ])

  // Event handler passed to child via props, demonstrating parent-child communication
  const handleProjectView = (project) => {
    console.log("[v0] Project viewed:", project.title)
    alert(
      `Viewing project: ${project.title}\n\nDescription: ${project.description}\n\nTechnologies: ${project.technologies.join(", ")}`,
    )
  }

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  const categories = ["all", "healthcare", "ai", "mobile", "web"]

  return (
    <section id="projects" className="min-h-screen py-20 px-8">

      <DualMarquee word1="MY" word2="PROJECTS" />

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare-focused applications and tools designed to help people live healthier lives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedFilter(category)
                console.log("[v0] Filter changed to:", category)
              }}
              className={`px-4 py-2 rounded-full transition-all ${selectedFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onView={handleProjectView} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
