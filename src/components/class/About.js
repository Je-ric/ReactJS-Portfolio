"use client"

import { Component } from "react"
import { FaLightbulb, FaHandsHelping, FaUser, FaCode } from "react-icons/fa"


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

    const coreValues = [
      {
        icon: <FaCode className="w-6 h-6" />,
        title: "Component-Based",
        description: "I structure my projects with reusable, modular components to make development faster and more organized, which helps when scaling projects.",
        gradient: "from-purple-400 to-pink-500"
      },
      {
        icon: <FaUser className="w-6 h-6" />,
        title: "User-Centered",
        description: "I design and code with real users in mind, focusing on their experience and needs to build intuitive and accessible web interfaces.",
        gradient: "from-purple-400 to-pink-500"
      },
      {
        icon: <FaLightbulb className="w-6 h-6" />,
        title: "Continuous Learning",
        description: "I actively learn new technologies and best practices, experimenting with different tools and frameworks to improve my skills and stay updated.",
        gradient: "from-purple-400 to-red-500"
      },
      {
        icon: <FaHandsHelping className="w-6 h-6" />,
        title: "Clean Code",
        description: "I write readable, maintainable, and efficient code so that projects are easy to understand and extend in the future.",
        gradient: "from-purple-400 to-red-500"
      },
    ]

    const hobbies = [
      { imgSrc: "/img/hobby_interest/listening.png", title: "Listening to Music" },
      { imgSrc: "/img/hobby_interest/scifi.png", title: "Science Fiction" },
      { imgSrc: "/img/hobby_interest/drums.png", title: "Playing Drums" },
      { imgSrc: "/img/hobby_interest/ecommerce.png", title: "E-Commerce" },
      { imgSrc: "/img/hobby_interest/watch.png", title: "Watching Movies" },
      { imgSrc: "/img/hobby_interest/nature.png", title: "Nature" },
      { imgSrc: "/img/hobby_interest/games.png", title: "Online Games" },
      { imgSrc: "/img/hobby_interest/browse.png", title: "Browsing Internet" },
    ];

    return (
      <section id="about" className="min-h-screen max-w-7xl mx-auto px-4 py-12 my-12 flex flex-col gap-12">

        <p className="text-lg text-muted-foreground text-center">
          Visit #{visitCount}
        </p>


        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72">
            <img
              src="/src/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl shadow-xl relative z-20"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6 min-w-[250px]">

            <div className="group p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Who Am I
              </h3>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                I’m a 4th-year BSIT student and aspiring full-stack web developer. My portfolio showcases my growing abilities in web development as I refine and expand my skills. I focus on creating thoughtful and functional web solutions, combining clean code, responsive design, and user-centered interfaces.
              </p>
            </div>

            <div className="group p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                Motto
              </h3>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                "If I have something to do today, I will do it now. To do something else tomorrow."
              </p>
            </div>
          </div>
        </div>


        <h3 className="text-2xl font-bold text-left">
          Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-2 p-4 border border-gray-700 hover:border-purple-500/50 transition-all shadow-md hover:shadow-lg bg-background/80 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className={`value-icon w-6 h-6 text-lg bg-clip-text text-transparent bg-gradient-to-r ${value.gradient}`}>
                  {value.icon}
                </div>

                <span className={`font-medium text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r ${value.gradient}`}>
                  {value.title}
                </span>
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed ml-9">
                {value.description}
              </p>
            </div>
          ))}
        </div>


        <h3 className="text-2xl font-bold text-left mt-6">
          Hobbies & Interests
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="hobby flex items-center gap-3 p-3 border border-gray-700 hover:border-cyan-500/50 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  src={hobby.imgSrc}
                  alt={hobby.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <span className="font-medium text-sm sm:text-base">
                {hobby.title}
              </span>
            </div>
          ))}
        </div>


      </section>
    )
  }
}

export default About