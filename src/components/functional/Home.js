import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    function handleShortcut(event) {
    }

    window.addEventListener("keydown", handleShortcut)
    return () => window.removeEventListener("keydown", handleShortcut)
  }, [])

  return (
    <section
      id="home"
      className="relative z-10 py-16 md:py-24 lg:py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Column: Text */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I'm Je-ric 
          </h1>
          <p className="text-lg max-w-xl mx-auto lg:mx-0">
            Your personal healthcare companion turned web developer.
          </p>
        </div>


<div className="w-full lg:w-1/2 rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-xl">
  <div className="gradient-border">
    <div className="code-window bg-[#091121]">
      {/* Window Header */}
      <div className="window-header flex items-center gap-2 px-4 py-2 bg-[#1e293b]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 text-sm text-gray-400 flex items-center gap-1">
          Developer.js
        </span>
      </div>

      {/* Code Body */}
      <pre className="p-6 overflow-x-auto font-mono text-sm w-full">
        <code>
          <span className="token keyword">const</span>{" "}
          <span className="token class-name">profile</span>{" "}
          <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>
          <br />
          &nbsp;&nbsp;<span className="token property">name</span>:{" "}
          <span className="token string">"Master Hiro"</span>,
          <br />
          &nbsp;&nbsp;<span className="token property">role</span>:{" "}
          <span className="token string">"Aspiring Full-Stack Developer"</span>,
          <br />
          &nbsp;&nbsp;<span className="token property">skills</span>: <span className="token punctuation">{"{"}</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">confident</span>:{" "}
          <span className="token string">["C Language", "HTML", "CSS", "Laravel", "Tailwind", "PHP"]</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">beginner</span>:{" "}
          <span className="token string">["Java", "Python"]</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">notConfident</span>:{" "}
          <span className="token string">["React", "JavaScript", "Django"]</span>,
          <br />
          &nbsp;&nbsp;<span className="token punctuation">{"}"}</span>,
          <br />
          &nbsp;&nbsp;<span className="token property">tools</span>:{" "}
          <span className="token string">["Lucidchart", "Draw.io", "GitHub", "ChatGPT"]</span>,
          <br />
          &nbsp;&nbsp;<span className="token property">resources</span>:{" "}
          <span className="token string">["W3Schools", "Laracasts", "StackOverflow"]</span>,
          <br />
          &nbsp;&nbsp;<span className="token property">traits</span>: <span className="token punctuation">{"{"}</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">notGenius</span>:{" "}
          <span className="token boolean">true</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">persistent</span>:{" "}
          <span className="token boolean">true</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">hardWorker</span>:{" "}
          <span className="token boolean">true</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token property">alwaysLearning</span>:{" "}
          <span className="token boolean">true</span>,
          <br />
          &nbsp;&nbsp;<span className="token punctuation">{"}"}</span>
          <br />
          <span className="token punctuation">{"};"}</span>
        </code>
      </pre>
    </div>
  </div>
</div>



      </div>
    </section>
  );
}

export default Home
