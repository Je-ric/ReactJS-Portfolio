"use client"

/*
  File: class/Contact.js
  What it is: A Class Component that renders a contact form and contact methods.
  How it works: Keeps form fields and submission state in `this.state`. Validates inputs on submit
  and simulates an async submission. Demonstrates class event handlers for inputs and form actions.

  Concepts demonstrated:
  - Class component with controlled form inputs
  - State: `formData`, `isSubmitting`, `submitCount`, `errors`
  - Event handling: `onChange`, `onFocus`, `onSubmit`, and button `onClick`
  - Basic validation: email regex and required fields
*/

import { Component } from "react"
import DualMarquee from '../layout/DualMarquee';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
      submitCount: 0,
      errors: {},
    }
  }

  // Lifecycle method for side effects (logging here)
  componentDidMount() {
    console.log("[v0] Contact component mounted")
  }

  // Controlled input change handler updates nested `formData` keys and clears individual errors
  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "", // Clear error when user starts typing
      },
    }))
    console.log("[v0] Form field updated:", name, value)
  }

  // Simple focus handler to show focus events are captured
  handleInputFocus = (e) => {
    console.log("[v0] Input focused:", e.target.name)
  }

  // Synchronous validation returning a flat error object keyed by field name
  validateForm = () => {
    const { formData } = this.state
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    return errors
  }

  // Form submit handler performs validation and simulates async submission via setTimeout
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submission attempted")

    const errors = this.validateForm()

    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      console.log("[v0] Form validation failed:", errors)
      return
    }

    this.setState({ isSubmitting: true, errors: {} })

    // Simulate form submission
    setTimeout(() => {
      console.log("[v0] Form submitted successfully:", this.state.formData)

      this.setState((prevState) => ({
        isSubmitting: false,
        submitCount: prevState.submitCount + 1,
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      }))

      alert("Thank you for your message! I will scan your request and respond soon.")
    }, 2000)
  }

  // Reset handler demonstrates resetting nested state in a class component
  handleReset = () => {
    console.log("[v0] Form reset")
    this.setState({
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      errors: {},
    })
  }

  render() {
    const { formData, isSubmitting, submitCount, errors } = this.state

    const contactMethods = [
      {
        icon: "📧",
        title: "Email",
        value: "baymax@healthcare.dev",
        onClick: () => {
          console.log("[v0] Email contact clicked")
          window.location.href = "mailto:baymax@healthcare.dev"
        },
      },
      {
        icon: "💼",
        title: "LinkedIn",
        value: "/in/baymax-healthcare",
        onClick: () => {
          console.log("[v0] LinkedIn contact clicked")
          alert("LinkedIn profile would open here")
        },
      },
      {
        icon: "🐙",
        title: "GitHub",
        value: "/baymax-dev",
        onClick: () => {
          console.log("[v0] GitHub contact clicked")
          alert("GitHub profile would open here")
        },
      },
    ]

    return (
      <section id="contact" className="min-h-screen py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">

            <DualMarquee word1="CONTACT" word2="ME" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to help with your healthcare technology needs. Messages sent: {submitCount}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="baymax-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I am programmed to respond to all inquiries within 24 hours. Whether you need healthcare technology
                  solutions or general web development, I am here to help.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <button
                      key={index}
                      onClick={method.onClick}
                      onMouseEnter={() => console.log("[v0] Contact method hovered:", method.title)}
                      className="w-full flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-left"
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <div className="font-medium">{method.title}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="baymax-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>

              <form onSubmit={this.handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className={`w-full p-3 border rounded-lg bg-background ${
                      errors.name ? "border-red-500" : "border-input"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className={`w-full p-3 border rounded-lg bg-background ${
                      errors.email ? "border-red-500" : "border-input"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className={`w-full p-3 border rounded-lg bg-background ${
                      errors.subject ? "border-red-500" : "border-input"
                    }`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className={`w-full p-3 border rounded-lg bg-background resize-none ${
                      errors.message ? "border-red-500" : "border-input"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 baymax-button bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? "Scanning Message..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={this.handleReset}
                    className="px-6 py-3 border border-input rounded-lg hover:bg-secondary"
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
