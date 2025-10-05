"use client"

import { Component } from "react"
import { FaEnvelope, FaGithub, FaCodepen, FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

class Contact extends Component {
  constructor(props) {
    super(props)
    // State: Form data and validation errors
    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      errors: {},
      isSubmitting: false, // Additional state para sa submission
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prev) => ({
      formData: { ...prev.formData, [name]: value },
      errors: { ...prev.errors, [name]: "" },
    }))
    console.log("[onChange]:", name, value)
  }

  handleInput = (e) => {
    console.log(`[onInput] ${e.target.name}: ${e.target.value}`)
  }

  validateForm = () => {
    const { formData } = this.state
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters"
    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validateForm()
    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      return
    }
    
    // Event handling: Simulate form submission with loading state
    this.setState({ isSubmitting: true })
    
    setTimeout(() => {
      this.setState({
        formData: { name: "", email: "", subject: "", message: "" },
        errors: {},
        isSubmitting: false,
      })
      alert("Thank you! Your message has been received.")
    }, 1500)
  }

  handleReset = () => {
    this.setState({
      formData: { name: "", email: "", subject: "", message: "" },
      errors: {},
    })
  }

  handleClick = (name) => {
    console.log(`[onClick] ${name} clicked`)
  }

  handleDoubleClick = (name) => {
    console.log(`[onDoubleClick] ${name} double-clicked`)
  }

  render() {
    const { formData, errors, isSubmitting } = this.state

    const contactMethods = [
      { icon: <FaEnvelope className="text-white w-6 h-6" />, name: "Email", username: "Jeric Dela Cruz", link: "mailto:jericjdelacruz@gmail.com" },
      { icon: <FaPhone className="text-white w-6 h-6" />, name: "Phone", username: "+63 975 880 6128", link: "tel:+639758806128" },
      { icon: <FaMapMarkerAlt className="text-white w-6 h-6" />, name: "Location", username: "Bantug, Science City of Munoz, Nueva Ecija", link: "https://www.google.com/maps/place/Dela+Cruz+Compund/@15.7221708,120.9216166,20z/data=!4m6!3m5!1s0x3390d7003e258ccf:0x234b9815f3fbe292!8m2!3d15.7220721!4d120.9212787!16s%2Fg%2F11y4176h12?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" },
    ]

    const followLinks = [
      { icon: <FaGithub className="w-6 h-6" />, link: "https://github.com/Je-ric" },
      { icon: <FaCodepen className="w-6 h-6" />, link: "https://codepen.io/Je-richiro" },
      { icon: <FaFacebook className="w-6 h-6" />, link: "https://www.facebook.com/jeric.delacruz.18294" },
      { icon: <FaInstagram className="w-6 h-6" />, link: "https://www.instagram.com/hiro.deecee/" },
    ]

    return (
      <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 py-12 my-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact & Follow */}
            <div>
              <div className="mb-6 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Let's Build Something Amazing Together</h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                  Reach out via the methods below or follow me on social platforms.
                </p>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => this.handleClick(method.name)}
                    onDoubleClick={() => this.handleDoubleClick(method.name)}
                    className="group flex items-center gap-3 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-cyan-400 hover:border-cyan-400 transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 bg-opacity-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <span className="text-white w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 group-hover:text-cyan-400">
                        {method.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                        {method.name}
                      </h3>
                      <span className="text-gray-200 text-sm sm:text-base">{method.username}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Follow Links */}
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4 mt-4">
                {followLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-background/80 backdrop-blur-md rounded-xl border border-cyan-400 hover:border-cyan-400 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-full h-full transition-colors duration-300 group-hover:text-cyan-500">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="contact-form z-20 backdrop-blur-md p-6 rounded-2xl border border-cyan-400 shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={this.handleSubmit} className="space-y-4">
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={this.handleInputChange}
                      onInput={this.handleInput}
                      className={`glass-input w-full p-3 border rounded-lg ${errors[field] ? "border-red-500" : "border-input"}`}
                    />
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}

                {/* Subject dropdown */}
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={this.handleInputChange}
                    className={`glass-input w-full p-3 border rounded-lg bg-background/80 backdrop-blur-md ${errors.subject ? "border-red-500" : "border-input"}`}
                  >
                    <option value="">Select a Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Project Request">Project Request</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={this.handleInputChange}
                    onInput={this.handleInput}
                    className={`glass-input w-full p-3 border rounded-lg resize-none ${errors.message ? "border-red-500" : "border-input"}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>


                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => this.handleClick("Send")}
                    // onDoubleClick={() => this.handleDoubleClick("Send")}
                    className={`flex-1 px-6 py-2.5 cursor-pointer rounded-full text-white text-sm font-semibold tracking-wide 
                        bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 
                        shadow-lg shadow-red-300 hover:shadow-xl hover:scale-105 
                        active:scale-95 active:shadow-md transition-all duration-300 ease-in-out
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  <button
                    type="button"
                    // onClick={() => { this.handleClick("Reset"); this.handleReset(); }}
                    onDoubleClick={() => this.handleDoubleClick("Reset")}
                    className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>




          </div>
        </div>
      </section>
    )
  }
}

export default Contact
