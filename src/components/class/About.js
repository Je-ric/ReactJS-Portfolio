"use client"

import { Component } from "react"
import { motion } from "framer-motion"
import { FaLightbulb, FaHandsHelping, FaUser, FaCode } from "react-icons/fa"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeValue: null 
    }
  }

  // usefull for debugging kung gusto mo malaman kung kelan nagrender yung component
  // componentDidMount() {
  //   console.log('About component mounted')
  // }

  handleValueClick = (value) => { // counter HAHAHAHAHA
    this.setState({ 
      activeValue: this.state.activeValue === value ? null : value 
    })
    console.log('Core value clicked:', value)
  }

  render() {
    const { activeValue } = this.state

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
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/listening.png", title: "Listening to Music" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/scifi.png", title: "Science Fiction" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/drums.png", title: "Playing Drums" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/ecommerce.png", title: "E-Commerce" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/watch.png", title: "Watching Movies" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/nature.png", title: "Nature" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/games.png", title: "Online Games" },
      { imgSrc: process.env.PUBLIC_URL + "/img/hobby_interest/browse.png", title: "Browsing Internet" },
    ];

    return (
      <section id="about" className="min-h-screen max-w-7xl mx-auto px-4 py-12 my-12 flex flex-col gap-12">


        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
        >
          <div className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72">
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl shadow-xl relative z-20"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6 min-w-[250px]">

            {/* "Who Am I" card */}
            <div className="group p-6 rounded-2xl border border-cyan-500/70 hover:border-blue-400 transition-all shadow-md hover:shadow-lg bg-background/80 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Who Am I
              </h3>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                I’m a 4th-year BSIT student and aspiring full-stack web developer. My portfolio showcases my growing abilities in web development as I refine and expand my skills. I focus on creating thoughtful and functional web solutions, combining clean code, responsive design, and user-centered interfaces.
              </p>
            </div>

            {/* "Motto" card */}
            <div className="group p-6 rounded-2xl border border-cyan-500/70 hover:border-yellow-400 transition-all shadow-md hover:shadow-lg bg-background/80 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                Motto
              </h3>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                "If I have something to do today, I will do it now. To do something else tomorrow."
              </p>
            </div>
          </div>
        </motion.div>


        <h3 className="text-2xl font-bold text-left">
          Core Values
        </h3>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        >
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              onClick={() => this.handleValueClick(value.title)}
              className={`group flex flex-col gap-2 p-4 border border-cyan-500/70 hover:border-purple-400 transition-all shadow-md hover:shadow-lg bg-background/80 backdrop-blur-md rounded-xl cursor-pointer ${
                activeValue === value.title ? 'border-purple-500/70 bg-purple-500/10' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.35 }}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
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
            </motion.div>
          ))}
        </motion.div>


        <h3 className="text-2xl font-bold text-left mt-6">
          Hobbies & Interests
        </h3>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        >
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              className="hobby flex items-center gap-3 p-3 border border-cyan-500/70 hover:border-pink-400 transition-all shadow-md hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.3 }}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
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
            </motion.div>
          ))}
        </motion.div>


      </section>
    )
  }
}

export default About