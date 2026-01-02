import projects from "./Projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolios = () => {
  return (
    <section
      className="py-32 bg-white dark:bg-[#1b4444] transition-colors duration-500"
      id="portfolio"
    >
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-black dark:text-[#A3F323] text-sm font-mono mb-4 tracking-wider">
            &gt; PROJECTS.showcase()
          </div>
          <h2 className="mb-6 text-6xl font-black text-black dark:text-white">
            SELECTED
            <span className="block text-black dark:text-[#A3F323]">WORKS</span>
          </h2>
          <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-200">
            A curated collection of projects spanning HR technology, eCommerce,
            LMS platforms, Food Tech, and SaaS products. Each showcasing
            expertise in modern web development, mobile apps, and AI-powered
            solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-black dark:bg-black text-white dark:text-white overflow-hidden hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-500"
            >
              {/* Project Number */}
              <div className="absolute text-4xl font-black transition-opacity duration-500 top-4 sm:top-6 left-4 sm:left-6 sm:text-6xl opacity-10 group-hover:opacity-20">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden sm:h-64">
                <img
                  src={project.pix}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-[#A3F323]/20 transition-colors duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="flex-1 text-xl font-bold leading-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <div className="flex flex-shrink-0 gap-2 sm:gap-3">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 transition-all duration-300 border border-current rounded-full sm:w-10 sm:h-10 group hover:bg-current hover:text-white"
                        title="View Live Site"
                      >
                        <FaExternalLinkAlt
                          size={12}
                          className="sm:text-sm group-hover:text-black"
                        />
                      </a>
                    )}
                    <a
                      href="#contact"
                      className="flex items-center justify-center w-8 h-8 transition-all duration-300 border border-current rounded-full sm:w-10 group sm:h-10 hover:bg-current hover:text-white"
                      title="View Code"
                    >
                      <FaGithub
                        size={12}
                        className="sm:text-sm group-hover:text-black"
                      />
                    </a>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed opacity-80 sm:mb-6">
                  {project.info}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tools
                    .split(", ")
                    .slice(0, 4)
                    .map((tool, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 font-mono text-xs border rounded-full sm:px-3 border-current/30"
                      >
                        {tool}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center sm:mt-20">
          <div className="mb-4 font-mono text-xs text-gray-400 dark:text-gray-300 sm:text-sm">
            INTERESTED_IN_COLLABORATION?
          </div>
          <a
            href="#contact"
            className="inline-block bg-black dark:bg-black text-white dark:text-white px-8 sm:px-12 py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-300"
          >
            LET'S WORK TOGETHER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
