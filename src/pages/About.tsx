import about from "../assets/images/about.png";

function About() {
  const skills = {
    frontend: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Expo",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS",
    ],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: [
      "VS Code",
      "Git & GitHub",
      "Figma",
      "Webflow",
      "Adobe Photoshop",
      "Netlify",
      "Postman",
    ],
    expertise: [
      "Authentication Systems",
      "Google Sign-in",
      "Payment Integration",
      "Subscriptions",
      "Dashboards",
      "Performance Optimization",
      "Clean Architecture",
      "UI/UX Design",
      "AI Systems Development",
      "Job Search Automation",
      "SEO Optimization",
    ],
  };

  return (
    <section className="py-32 text-white bg-black" id="about">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-[#A3F323] text-sm font-mono mb-4 tracking-wider">
            &gt; DEVELOPER.getInfo()
          </div>
          <h2 className="mb-6 text-6xl font-black">
            ABOUT
            <span className="block text-[#A3F323]">ME</span>
          </h2>
        </div>

        <div className="grid items-start gap-12 mb-16 lg:grid-cols-2 lg:gap-16 sm:mb-20">
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative mb-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <img
                  src={about}
                  className="object-cover w-full h-full transition-all duration-500 filter grayscale hover:grayscale-0"
                  alt="Paul Abakada"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#A3F323]"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:space-y-6 sm:text-lg">
              <p>
                <span className="text-[#A3F323] font-mono text-sm">//</span> I'm
                a{" "}
                <span className="text-[#A3F323] font-semibold">
                  Frontend & Mobile Developer
                </span>{" "}
                with{" "}
                <span className="text-[#A3F323] font-semibold">3+ years</span>{" "}
                of hands-on experience building modern, user-focused
                applications.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-[#A3F323]">
                  React, React Native, Next.js, TypeScript, Zustand, Redux Toolkit, and React
                  Query
                </span>
                , with backend expertise in Node.js, Express, and MongoDB. My
                work spans HR technology, eCommerce, LMS platforms, Food Tech, and SaaS
                products.
              </p>
              <p>
                I've built core features like authentication systems, Google
                sign-in, subscriptions and payments, dashboards, and performance
                optimization. I've also implemented AI-based systems and assisted in building
                AI systems for job search and automation. I understand SEO principles and improve
                business visibility through optimized code. Beyond coding, I bring a product-minded approach
                to improve business processes and direction.
              </p>
              <p>
                I hold professional certifications across tech and business
                fields, and I'm passionate about clean architecture, strong
                UI/UX, continuous learning, and exploring AI automation solutions.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <a
                href="#contact"
                className="inline-block bg-[#A3F323] text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                LET'S COLLABORATE
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* Frontend & Mobile */}
          <div className="border border-gray-800 p-6 sm:p-8 hover:border-[#A3F323] transition-colors duration-300">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] text-xl sm:text-2xl mb-2">01</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                FRONTEND & MOBILE
              </h3>
              <p className="text-sm text-gray-400">
                Building responsive web and mobile apps with modern frameworks
                and state management.
              </p>
            </div>

            <div className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-300 hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border border-gray-800 p-6 sm:p-8 hover:border-[#A3F323] transition-colors duration-300">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] text-xl sm:text-2xl mb-2">02</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                BACKEND
              </h3>
              <p className="text-sm text-gray-400">
                Server-side development with Node.js ecosystem and database
                management.
              </p>
            </div>

            <div className="space-y-2">
              {skills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-300 hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Design */}
          <div className="border border-gray-800 p-6 sm:p-8 hover:border-[#A3F323] transition-colors duration-300">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] text-xl sm:text-2xl mb-2">03</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                TOOLS & DESIGN
              </h3>
              <p className="text-sm text-gray-400">
                Design and development tools for enhanced productivity and
                workflow.
              </p>
            </div>

            <div className="space-y-2">
              {skills.tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-300 hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Core Expertise */}
          <div className="border border-gray-800 p-6 sm:p-8 hover:border-[#A3F323] transition-colors duration-300">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] text-xl sm:text-2xl mb-2">04</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                EXPERTISE
              </h3>
              <p className="text-sm text-gray-400">
                Specialized experience in complex features and business
                solutions.
              </p>
            </div>

            <div className="space-y-2">
              {skills.expertise.map((expertise, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-300 hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {expertise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
