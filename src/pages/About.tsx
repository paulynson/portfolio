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
    <section
      className="py-16 sm:py-32 bg-black dark:bg-[#1b4444] text-white dark:text-white transition-colors duration-500"
      id="about"
    >
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20">
          <div className="text-[#A3F323] dark:text-[#A3F323] text-xs sm:text-sm font-mono mb-3 sm:mb-4 tracking-wider">
            &gt; DEVELOPER.getInfo()
          </div>
          <h2 className="mb-4 text-4xl font-black text-white sm:mb-6 sm:text-6xl dark:text-white">
            ABOUT
            <span className="block text-[#A3F323] dark:text-[#A3F323]">ME</span>
          </h2>
        </div>

        {/* Mobile: Complete Content Layout */}
        <div className="block mb-12 space-y-8 sm:hidden">
          {/* Mobile Profile Section */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto">
                <img
                  src={about}
                  className="object-cover w-full h-full filter grayscale"
                  alt="Paul Abakada"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-4 border-[#A3F323] dark:border-[#A3F323]"></div>
              </div>
            </div>
          </div>

          {/* Mobile About Content */}
          <div className="space-y-6 text-sm leading-relaxed text-gray-200 dark:text-gray-100">
            <p>
              <span className="text-[#A3F323] dark:text-[#A3F323] font-mono text-xs">
                //
              </span>{" "}
              I'm a{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                Frontend & Mobile Developer
              </span>{" "}
              with{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                3+ years
              </span>{" "}
              of hands-on experience building modern, user-focused applications.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-medium">
                React, React Native, Next.js, TypeScript, Zustand, Redux Toolkit, and React Query
              </span>
              , with backend expertise in Node.js, Express, and MongoDB. My work spans HR technology, eCommerce, LMS platforms, Food Tech, and SaaS products.
            </p>
            <p>
              I've built core features like authentication systems, Google sign-in, subscriptions and payments, dashboards, and performance optimization. I've also implemented AI-based systems and assisted in building AI systems for job search and automation. I understand SEO principles and improve business visibility through optimized code. Beyond coding, I bring a product-minded approach to improve business processes and direction.
            </p>
            <p>
              I hold professional certifications across tech and business fields, and I'm passionate about clean architecture, strong UI/UX, continuous learning, and exploring AI automation solutions.
            </p>
          </div>

          {/* Mobile Skills Section */}
          <div className="space-y-6">
            {/* Frontend & Mobile */}
            <div className="border border-gray-700 dark:border-gray-500 p-4 bg-gray-900 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  01
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  FRONTEND & MOBILE
                </h3>
                <p className="text-xs text-gray-300 dark:text-gray-200 mb-3">
                  Building responsive web and mobile apps with modern frameworks and state management.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs font-mono text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="border border-gray-700 dark:border-gray-500 p-4 bg-gray-900 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  02
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  BACKEND
                </h3>
                <p className="text-xs text-gray-300 dark:text-gray-200 mb-3">
                  Server-side development with Node.js and database management.
                </p>
              </div>
              <div className="space-y-1">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs font-mono text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="border border-gray-700 dark:border-gray-500 p-4 bg-gray-900 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  03
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  TOOLS & DESIGN
                </h3>
                <p className="text-xs text-gray-300 dark:text-gray-200 mb-3">
                  Development tools and design software for complete project workflow.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs font-mono text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="border border-gray-700 dark:border-gray-500 p-4 bg-gray-900 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  04
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  EXPERTISE
                </h3>
                <p className="text-xs text-gray-300 dark:text-gray-200 mb-3">
                  Specialized skills and advanced implementations across various domains.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {skills.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs font-mono text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4">
            <a
              href="#contact"
              className="block bg-[#A3F323] dark:bg-[#A3F323] text-black dark:text-black px-8 py-3 font-bold text-base transition-all duration-300 hover:bg-white dark:hover:bg-white text-center"
            >
              LET'S COLLABORATE
            </a>
          </div>
        </div>

        {/* Desktop: Original Layout */}
        <div className="items-start hidden gap-12 mb-16 sm:grid lg:grid-cols-2 lg:gap-16 sm:mb-20">
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative mb-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <img
                  src={about}
                  className="object-cover w-full h-full transition-all duration-500 filter grayscale hover:grayscale-0 dark:filter-none"
                  alt="Paul Abakada"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#A3F323] dark:border-[#A3F323]"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 text-base leading-relaxed text-gray-200 dark:text-gray-100 sm:space-y-6 sm:text-lg">
              <p>
                <span className="text-[#A3F323] dark:text-[#A3F323] font-mono text-sm">
                  //
                </span>{" "}
                I'm a{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                  Frontend & Mobile Developer
                </span>{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                  3+ years
                </span>{" "}
                of hands-on experience building modern, user-focused
                applications.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-medium">
                  React, React Native, Next.js, TypeScript, Zustand, Redux
                  Toolkit, and React Query
                </span>
                , with backend expertise in Node.js, Express, and MongoDB. My
                work spans HR technology, eCommerce, LMS platforms, Food Tech,
                and SaaS products.
              </p>
              <p>
                I've built core features like authentication systems, Google
                sign-in, subscriptions and payments, dashboards, and performance
                optimization. I've also implemented AI-based systems and
                assisted in building AI systems for job search and automation. I
                understand SEO principles and improve business visibility
                through optimized code. Beyond coding, I bring a product-minded
                approach to improve business processes and direction.
              </p>
              <p>
                I hold professional certifications across tech and business
                fields, and I'm passionate about clean architecture, strong
                UI/UX, continuous learning, and exploring AI automation
                solutions.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <a
                href="#contact"
                className="inline-block bg-[#A3F323] dark:bg-[#A3F323] text-black dark:text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-white dark:hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                LET'S COLLABORATE
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Skills Section */}
        <div className="hidden grid-cols-1 gap-6 sm:grid md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* Frontend & Mobile */}
          <div className="border border-gray-700 dark:border-gray-500 p-6 sm:p-8 hover:border-[#A3F323] dark:hover:border-[#A3F323] transition-colors duration-300 bg-gray-900 dark:bg-black/30">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] dark:text-[#A3F323] text-xl sm:text-2xl mb-2 font-bold">
                01
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 dark:text-white">
                FRONTEND & MOBILE
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Building responsive web and mobile apps with modern frameworks
                and state management.
              </p>
            </div>

            <div className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-200 dark:text-gray-100 hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border border-gray-700 dark:border-gray-500 p-6 sm:p-8 hover:border-[#A3F323] dark:hover:border-[#A3F323] transition-colors duration-300 bg-gray-900 dark:bg-black/30">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] dark:text-[#A3F323] text-xl sm:text-2xl mb-2 font-bold">
                02
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 dark:text-white">
                BACKEND
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Server-side development with Node.js ecosystem and database
                management.
              </p>
            </div>

            <div className="space-y-2">
              {skills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-200 dark:text-gray-100 hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Design */}
          <div className="border border-gray-700 dark:border-gray-500 p-6 sm:p-8 hover:border-[#A3F323] dark:hover:border-[#A3F323] transition-colors duration-300 bg-gray-900 dark:bg-black/30">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] dark:text-[#A3F323] text-xl sm:text-2xl mb-2 font-bold">
                03
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 dark:text-white">
                TOOLS & DESIGN
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Design and development tools for enhanced productivity and
                workflow.
              </p>
            </div>

            <div className="space-y-2">
              {skills.tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-200 dark:text-gray-100 hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-200"
                >
                  &gt; {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Core Expertise */}
          <div className="border border-gray-700 dark:border-gray-500 p-6 sm:p-8 hover:border-[#A3F323] dark:hover:border-[#A3F323] transition-colors duration-300 bg-gray-900 dark:bg-black/30">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] dark:text-[#A3F323] text-xl sm:text-2xl mb-2 font-bold">
                04
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 dark:text-white">
                EXPERTISE
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Specialized experience in complex features and business
                solutions.
              </p>
            </div>

            <div className="space-y-2">
              {skills.expertise.map((expertise, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-200 dark:text-gray-100 hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-200"
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
