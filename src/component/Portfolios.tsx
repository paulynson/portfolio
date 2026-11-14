import { useState } from "react";
import projects from "./Projects";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_SIZE = 6;

const Portfolios = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginated = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
            Selected frontend engineering work across production marketplaces, real-time
            applications, education platforms, SaaS and React Native mobile experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {paginated.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-black dark:bg-black text-white dark:text-white overflow-hidden hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-500"
            >
              {/* Project Number */}
              <div className="absolute text-4xl font-black transition-opacity duration-500 top-4 sm:top-6 left-4 sm:left-6 sm:text-6xl opacity-10 group-hover:opacity-20">
                {String((page - 1) * PAGE_SIZE + index + 1).padStart(2, "0")}
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 pt-10 sm:pt-12">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 font-mono text-xs border border-current/40 rounded-full text-[#A3F323] group-hover:text-black group-hover:border-black/40">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="flex-1 text-xl font-bold leading-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 border border-current rounded-full hover:bg-current"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt size={12} className="group-hover:text-black" />
                    </a>
                  )}
                </div>

                <p className="mb-6 text-sm leading-relaxed opacity-80">
                  {project.info}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.split(", ").slice(0, 4).map((tool, i) => (
                    <span
                      key={i}
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

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: document.getElementById("portfolio")?.offsetTop ?? 0, behavior: "smooth" }); }}
            disabled={page === 1}
            className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#A3F323] hover:border-[#A3F323] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous page"
          >
            <FaChevronLeft size={14} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => { setPage(p); window.scrollTo({ top: document.getElementById("portfolio")?.offsetTop ?? 0, behavior: "smooth" }); }}
              className={`w-10 h-10 font-mono text-sm font-bold transition-all duration-300 border-2 ${
                p === page
                  ? "bg-[#A3F323] border-[#A3F323] text-black"
                  : "border-black dark:border-white text-black dark:text-white hover:bg-[#A3F323] hover:border-[#A3F323] hover:text-black"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: document.getElementById("portfolio")?.offsetTop ?? 0, behavior: "smooth" }); }}
            disabled={page === totalPages}
            className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#A3F323] hover:border-[#A3F323] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next page"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        <div className="mt-3 text-center font-mono text-xs text-gray-400 dark:text-gray-400">
          PAGE {page} / {totalPages} — {projects.length} PROJECTS
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
