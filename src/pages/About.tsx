import about from "../assets/images/Paul.png";

function About() {
  const experience = [{"role":"Software Developer (Frontend)","company":"Chef4Me","period":"Nov 2024 - Oct 2026","detail":"Built marketplace journeys, integrated APIs and payments, and improved loading through code splitting."},{"role":"Frontend Developer","company":"Reposebay HR","period":"Apr 2024 - Jul 2024","detail":"Developed React and TypeScript dashboards for payroll, attendance and employee administration."},{"role":"Frontend Team Lead","company":"QrateArt","period":"May 2023 - May 2024","detail":"Led three frontend developers and reduced frontend bundle size by 20%."},{"role":"Frontend Developer","company":"Kev Solutions and Technology","period":"Jun 2022 - May 2023","detail":"Developed React interfaces for education, fintech and ecommerce projects with REST APIs and Redux Toolkit."}];

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Expo",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Stripe",
      "Paystack",
      "Flutterwave",
      "AI APIs",
    ],
    tools: ["Git & GitHub", "Docker", "Figma", "Postman", "Vercel / Netlify"],
    expertise: [
      "SaaS Development",
      "AI-powered Applications",
      "Mobile Applications",
      "Enterprise Dashboards",
      "Authentication & Identity",
      "Payment & Subscription Systems",
      "API Integrations",
      "Analytics & Reporting",
      "Performance Optimisation",
      "System Architecture",
      "Technical SEO",
      "Business Process Automation",
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
            &gt; ENGINEER.getInfo()
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
              I'm{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                Paul Abakada
              </span>{" "}
              , a Senior Frontend Engineer, Product Builder, and Founder of{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                Apisat Enterprises
              </span>
              . I build scalable web and mobile applications that
              solve real business problems.
            </p>
            <p>
              My work spans the full product lifecycle - from architecture and
              engineering to deployment and iteration. I've shipped products
              across AI-powered recruitment platforms, Learning Management
              Systems, FoodTech, SaaS applications, Chrome Extensions, analytics
              dashboards, e-commerce solutions, and mobile apps. Each project
              starts with understanding the business problem, not just the
              technical brief.
            </p>
            <p>
              On the technical side, I work across the stack using{" "}
              <span className="text-[#A3F323] dark:text-[#A3F323] font-medium">
                React, React Native, Next.js, TypeScript, Node.js, Express, and
                MongoDB
              </span>
              , with strong experience in state management, REST APIs, AI
              integrations, Docker, and WordPress. I care deeply about
              performance, accessibility, and writing code that teams can
              maintain and build on.
            </p>
            <p>
              What sets my approach apart is the combination of engineering
              depth and business thinking. I don't just build features - I think
              about why they exist, who they serve, and what outcome they need
              to deliver. I'm continuously exploring AI, automation, and
              emerging technologies to stay ahead of what's possible.
            </p>
            <p>
              My mission is straightforward: build technology that helps
              businesses grow and people work smarter.
            </p>
          </div>

          {/* Mobile Skills Section */}
          <div className="space-y-6">
            {/* Frontend & Mobile */}
            <div className="p-4 bg-gray-900 border border-gray-700 dark:border-gray-500 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  01
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  ENGINEERING
                </h3>
                <p className="mb-3 text-xs text-gray-300 dark:text-gray-200">
                  Core languages and frameworks used to build web and mobile products.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-xs text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-4 bg-gray-900 border border-gray-700 dark:border-gray-500 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  02
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  BACKEND & INTEGRATIONS
                </h3>
                <p className="mb-3 text-xs text-gray-300 dark:text-gray-200">
                  Server-side development, databases, and third-party integrations.
                </p>
              </div>
              <div className="space-y-1">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-xs text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-4 bg-gray-900 border border-gray-700 dark:border-gray-500 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  03
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  TOOLS
                </h3>
                <p className="mb-3 text-xs text-gray-300 dark:text-gray-200">
                  Development and collaboration tools used across every project.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-xs text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="p-4 bg-gray-900 border border-gray-700 dark:border-gray-500 dark:bg-black/30">
              <div className="mb-4">
                <div className="text-[#A3F323] dark:text-[#A3F323] text-lg mb-2 font-bold">
                  04
                </div>
                <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
                  CORE EXPERTISE
                </h3>
                <p className="mb-3 text-xs text-gray-300 dark:text-gray-200">
                  The kinds of products and business solutions I build.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {skills.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-xs text-gray-200 dark:text-gray-100"
                  >
                    &gt; {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center"><a href="/Paul_Abakada_CV.pdf" download="Paul_Abakada_CV.pdf" className="inline-block border-2 border-[#A3F323] px-6 py-3 text-center font-bold text-[#A3F323] hover:bg-[#A3F323] hover:text-black">DOWNLOAD CV (PDF)</a></div>
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
                I'm{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                  Paul Abakada,
                </span>{" "}
                a Senior Frontend Engineer, Product Builder, and Founder of{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-semibold">
                  Apisat Enterprises
                </span>
                . I build scalable web and mobile applications that
                solve real business problems.
              </p>
              <p>
                My work spans the full product lifecycle, from architecture and
                engineering to deployment and iteration. I've shipped products
                across AI-powered recruitment platforms, Learning Management
                Systems, FoodTech, SaaS applications, Chrome Extensions,
                analytics dashboards, e-commerce solutions, and mobile apps.
                Each project starts with understanding the business problem, not
                just the technical brief.
              </p>
              <p>
                On the technical side, I work across the stack using{" "}
                <span className="text-[#A3F323] dark:text-[#A3F323] font-medium">
                  React, React Native, Next.js, TypeScript, Node.js, Express,
                  and MongoDB
                </span>
                , with strong experience in state management, REST APIs, AI
                integrations, Docker, and WordPress. I care deeply about
                performance, accessibility, and writing code that teams can
                maintain and build on.
              </p>
              <p>
                What sets my approach apart is the combination of engineering
                depth and business thinking. I don't just build features. I
                think about why they exist, who they serve, and what outcome
                they need to deliver. I'm continuously exploring AI, automation,
                and emerging technologies to stay ahead of what's possible.
              </p>
              <p>
                My mission is straightforward: build technology that helps
                businesses grow and people work smarter.
              </p>
            </div>

            <div className="pt-4 sm:pt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-[#A3F323] dark:bg-[#A3F323] text-black dark:text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-white dark:hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                LET'S COLLABORATE
              </a>
              <a href="/Paul_Abakada_CV.pdf" download="Paul_Abakada_CV.pdf" className="inline-block border-2 border-[#A3F323] px-6 py-3 text-center font-bold text-[#A3F323] hover:bg-[#A3F323] hover:text-black">DOWNLOAD CV (PDF)</a>
            </div>
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="mb-5 font-mono text-xs tracking-wider text-[#A3F323]">&gt; ENGINEER.experience()</div>
          <h3 className="mb-8 text-2xl font-black text-white sm:text-4xl">PROFESSIONAL EXPERIENCE</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((job) => (
              <article key={job.company} className="border border-gray-700 bg-gray-900 p-5 dark:border-gray-500 dark:bg-black/30 sm:p-6">
                <p className="mb-2 font-mono text-xs text-[#A3F323]">{job.period}</p>
                <h4 className="text-lg font-bold text-white">{job.role}</h4>
                <p className="mb-3 text-sm font-semibold text-gray-200">{job.company}</p>
                <p className="text-sm leading-relaxed text-gray-300">{job.detail}</p>
              </article>
            ))}
          </div>
        </div>
        {/* Desktop Skills Section */
        <div className="hidden grid-cols-1 gap-6 sm:grid md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* Frontend & Mobile */}
          <div className="border border-gray-700 dark:border-gray-500 p-6 sm:p-8 hover:border-[#A3F323] dark:hover:border-[#A3F323] transition-colors duration-300 bg-gray-900 dark:bg-black/30">
            <div className="mb-4 sm:mb-6">
              <div className="text-[#A3F323] dark:text-[#A3F323] text-xl sm:text-2xl mb-2 font-bold">
                01
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 dark:text-white">
                ENGINEERING
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Core languages and frameworks used to build web and mobile products.
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
                BACKEND & INTEGRATIONS
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Server-side development, databases, and third-party integrations.
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
                TOOLS
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                Development and collaboration tools used across every project.
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
                CORE EXPERTISE
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-200">
                The kinds of products and business solutions I build.
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
