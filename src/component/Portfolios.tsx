import projects from "./Projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolios = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#1b4444] transition-colors duration-500" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-[#A3F323] dark:text-[#A3F323] text-sm font-mono mb-4 tracking-wider">
            &gt; PROJECTS.showcase()
          </div>
          <h2 className="text-6xl font-black text-black dark:text-white mb-6">
            SELECTED
            <span className="block text-[#A3F323] dark:text-[#A3F323]">WORKS</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl">
            A curated collection of projects spanning HR technology, eCommerce, LMS platforms, Food Tech, and SaaS products. 
            Each showcasing expertise in modern web development, mobile apps, and AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-black dark:bg-black text-white dark:text-white overflow-hidden hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-500"
            >
              {/* Project Number */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img
                  src={project.pix}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-[#A3F323]/20 transition-colors duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight flex-1">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 border border-current rounded-full flex items-center justify-center hover:bg-current hover:text-black transition-all duration-300"
                        title="View Live Site"
                      >
                        <FaExternalLinkAlt size={12} className="sm:text-sm" />
                      </a>
                    )}
                    <a
                      href="#contact"
                      className="w-8 h-8 sm:w-10 sm:h-10 border border-current rounded-full flex items-center justify-center hover:bg-current hover:text-black transition-all duration-300"
                      title="View Code"
                    >
                      <FaGithub size={12} className="sm:text-sm" />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm opacity-80 mb-4 sm:mb-6 leading-relaxed">
                  {project.info}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.split(", ").slice(0, 4).map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-2 sm:px-3 py-1 border border-current/30 rounded-full"
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
        <div className="text-center mt-16 sm:mt-20">
          <div className="text-gray-400 dark:text-gray-300 text-xs sm:text-sm font-mono mb-4">
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
