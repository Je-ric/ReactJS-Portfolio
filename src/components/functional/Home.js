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
      className="relative z-10 py-10 md:py-16 lg:py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Column: Text */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
          <p className="hello font-mono text-sm mb-4"> {'>_ HELLO_WORLD.EXECUTE()'}</p>
          <h1 className="text-7xl md:text-8xl font-bold">
            Hello, <br /> I'm <span className="gradient-text">Je-ric </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto lg:mx-0">
            I'm a BSIT student at Central Luzon State University and an aspiring full-stack developer.
          </p>

<div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
  <a
    href="#projects"
    className="px-6 py-2.5 cursor-pointer rounded-full text-white text-sm font-semibold tracking-wide 
               bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
               shadow-lg shadow-yellow-300 hover:shadow-xl hover:scale-105 
               active:scale-95 active:shadow-md transition-all duration-300 ease-in-out"
  >
    My Works
  </a>

  <a
    href="#contact"
    className="px-6 py-2.5 cursor-pointer rounded-full text-white text-sm font-semibold tracking-wide 
               bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
               shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 
               active:scale-95 active:shadow-md transition-all duration-300 ease-in-out"
  >
    Get in Touch
  </a>
</div>





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
                  Information_Ko.js
                </span>
              </div>

              {/* Code Body */}
              <pre className="p-6 overflow-x-auto font-mono text-sm w-full">
                <code>
                  <span className="token keyword">const</span>{" "}
                  <span className="token class-name">profile</span>{" "}
                  <span className="token operator">=</span>{" "}
                  <span className="token punctuation">&#123;</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">name</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token string">'Master Hiro'</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">role</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token string">'Aspiring Full-Stack Developer'</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">skills</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">&#123;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">fairEnough</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">[</span>
                  <span className="token string">'C Language'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'HTML'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'CSS'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Laravel'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Tailwind'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'PHP'</span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">beginner</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">[</span>
                  <span className="token string">'Java'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Python'</span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">notConfident</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">[</span>
                  <span className="token string">'React'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'JavaScript'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Django'</span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token punctuation">&#125;</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">tools</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">[</span>
                  <span className="token string">'Figma'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Draw.io'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'GitHub'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'ChatGPT'</span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">resources</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">[</span>
                  <span className="token string">'W3Schools'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'Laracasts'</span>
                  <span className="token punctuation">,</span>{" "}
                  <span className="token string">'StackOverflow'</span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token property">traits</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">&#123;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">notGenius</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">persistent</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">hardWorker</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">alwaysLearning</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token boolean">true</span>
                  <span className="token punctuation">,</span>
                  <br />
                  &nbsp;&nbsp;<span className="token punctuation">&#125;</span>
                  <br />
                  <span className="token punctuation">&#125;</span>
                  <span className="token punctuation">;</span>
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
