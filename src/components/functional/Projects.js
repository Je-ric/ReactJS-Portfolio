"use client"

import { useState } from "react"
import { FaGithub } from "react-icons/fa"

const ProjectCard = ({ project }) => (
  <div className="proj-card relative p-6 z-20 rounded-xl bg-[#091121] border border-gray-600 hover:border-cyan-500 hover:shadow-xl transition-colors duration-300 shadow-md flex flex-col justify-between">

    {project.image ? (
      <div className="w-full h-48 md:h-56 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
    ) : (
      <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
        Project Image
      </div>
    )}

    <div>
      <h3 className="text-xl font-semibold text-cyan-500 mb-2">{project.title}</h3>
      <p className="proj-desc text-muted-foreground text-justify mb-4 text-sm md:text-base">{project.description}</p>
    </div>

    <div className="mt-4 flex flex-col gap-3 items-start">
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="proj-pill px-3 py-1 text-gray-200 border border-green-500 rounded-full text-xs md:text-sm cursor-default
             transition-transform duration-200 hover:-translate-y-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 text-white text-base md:text-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label="GitHub Repository"
      >
        <FaGithub />
      </a>
    </div>

  </div>
)

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Color Game",
      description: "Developed an engaging Java color-matching game featuring three levels of difficulty—easy, medium, and hard—each with varying numbers of dice and colors for betting. This project uses the power of Java Swing for visually appealing graphics.",
      technologies: ["Java"],
      github: "https://github.com/Je-ric",
      image: "/img/colorgame.png",
    },
    {
      id: 2,
      title: "BeatStrum",
      description: "Developed BeatStrum, an e-commerce website for musical instruments, using an object-oriented programming approach. The project features a user-friendly interface, categorized listings, and efficient product management.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "AJAX"],
      github: "https://github.com/Je-ric",
      image: "/img/BeatStrum.png",
    },
    {
      id: 3,
      title: "CBAA Front-End Website",
      description: "Developed a responsive website for the College of Business Administration and Accountancy (CBAA), emphasizing front-end development practices. The website effectively outlines the college's programs, courses, and faculty and staff while ensuring seamless viewing across various devices, enhancing user experience and accessibility.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Je-ric",
      image: "/img/cbaa.png",
    },
    {
      id: 4,
      title: "Concert Reservation System",
      description: "Built a Concert Reservation System using Object-Oriented Programming, featuring user-friendly interfaces for both administrators and attendees. Users can effortlessly browse available concerts, reserve specific seats, receive email notifications, utilize various payment methods, and easily cancel reservations.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "AJAX"],
      github: "https://github.com/Je-ric",
      image: "/img/Concert.png",
    },
    {
      id: 5,
      title: "Student Portal",
      description: "Introducing a comprehensive Student Portal system built on Object-Oriented Programming principles. Seamlessly manage grading systems, update student records, and empower administrators with efficient information modification, all through intuitive interfaces tailored for both students and administrators.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Je-ric",
      image: "/img/StudentPortal.png",
    },
    {
      id: 6,
      title: "Job Application Form",
      description: "Designed a dynamic job application form with interactive fields allowing applicants to easily modify and update their submissions. Built functionality for administrators to review and manage applications, including the ability to delete redundant entries, simplifying the recruitment process effectively.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Je-ric",
      image: "/img/jobs.png",
    },
  ])

  return (
    <section id="projects" className="min-h-screen py-12 my-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6 pb-6 text-center">A few of my personal and academic projects where I’m practicing coding, experimenting with new tools,
          and improving my development skills.
          You can see the technologies I used and view the code on GitHub.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Props */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
