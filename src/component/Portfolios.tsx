import { useEffect, useRef, useState } from "react";
import projects, { type PortfolioProject } from "./Projects";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes, FaInfoCircle } from "react-icons/fa";

const PAGE_SIZE = 6;

const Portfolios = () => {
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [imageExpanded, setImageExpanded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openDetails = (project: PortfolioProject) => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setImageExpanded(false);
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setImageExpanded(false);
    setSelectedProject(null);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  };

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (imageExpanded) setImageExpanded(false);
        else closeDetails();
      }
      if (event.key === "Tab") {
        const modal = document.getElementById("project-details-modal");
        const focusable = modal?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject, imageExpanded]);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginated = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section
      className="py-16 sm:py-32 bg-white dark:bg-[#1b4444] transition-colors duration-500"
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
            Explore the engineering behind production marketplaces, real-time applications,
            education platforms, SaaS and React Native mobile experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {paginated.map((project, index) => (
            <div
              key={project.id}
              tabIndex={project.caseStudy ? 0 : undefined}
              role={project.caseStudy ? "button" : undefined}
              onKeyDown={(event) => {
                if (project.caseStudy && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  openDetails(project);
                }
              }}
              onClick={() => { if (project.caseStudy) openDetails(project); }}
              data-pointer-tilt className="project-interactive pointer-tilt group relative bg-black dark:bg-black text-white dark:text-white overflow-hidden hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-500 hover:shadow-[0_0_0_1px_#A3F323] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3F323]"
            >
              <span aria-hidden="true" className="project-hover-label pointer-events-none absolute right-4 top-4 z-10 border border-[#A3F323] bg-black/90 px-3 py-2 font-mono text-xs text-[#A3F323] sm:right-6 sm:top-6">{project.caseStudy ? "VIEW CASE STUDY ↗" : "EXPLORE PROJECT ↗"}</span>
              {/* Project Number */}
              <div className="absolute text-4xl font-black transition-opacity duration-500 top-4 sm:top-6 left-4 sm:left-6 sm:text-6xl opacity-10 group-hover:opacity-20">
                {String((page - 1) * PAGE_SIZE + index + 1).padStart(2, "0")}
              </div>

              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-video object-cover border-b border-white/10 transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                />
              )}

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
                      title={`Visit ${project.title}`}
                      aria-label={`Visit ${project.title} (opens in a new tab)`}
                    >
                      <FaExternalLinkAlt size={12} className="group-hover:text-black" />
                    </a>
                  )}
                  {project.link === "#" && (
                    <button
                      type="button"
                      onClick={(event) => { event.stopPropagation(); openDetails(project); }}
                      className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 border border-current rounded-full hover:bg-current"
                      title={`Read about ${project.title}`}
                      aria-label={`Read about ${project.title}`}
                    >
                      <FaInfoCircle size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>

                <p className="mb-6 text-sm leading-relaxed opacity-80">
                  {project.info}
                </p>

                {project.caseStudy && (
                  <div className="mb-5 border-l-2 border-[#A3F323] pl-3">
                    <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A3F323] group-hover:text-black">Engineering focus</p>
                    <p className="text-sm leading-relaxed opacity-90">{project.caseStudy.engineering}</p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.split(", ").slice(0, 4).map((tool) => (
                    <span
                      key={`${project.id}-${tool}`}
                      className="px-2 py-1 font-mono text-xs border rounded-full sm:px-3 border-current/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.caseStudy && (
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); openDetails(project); }}
                    className="mt-5 inline-flex items-center gap-2 border-b border-[#A3F323] pb-1 text-sm font-semibold text-[#A3F323] transition-colors group-hover:border-black group-hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A3F323]"
                  >
                    Explore engineering case study <FaExternalLinkAlt aria-hidden="true" size={11} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="project-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDetails();
            }}
          >
            <div
              id="project-details-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-details-title"
              aria-describedby="project-details-description"
              className="project-modal-panel relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-[#A3F323] bg-black dark:bg-[#1b4444] p-6 text-white shadow-2xl sm:p-10"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDetails}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/40 text-white hover:bg-[#A3F323] hover:text-black"
                aria-label="Close project details"
              >
                <FaTimes aria-hidden="true" />
              </button>
              <div className="mb-4 pr-12 font-mono text-xs uppercase tracking-wider text-[#A3F323]">
                PROJECT_DETAILS
              </div>
              <h3 id="project-details-title" className="mb-3 pr-8 text-2xl font-black sm:text-4xl">
                {selectedProject.title}
              </h3>
              <p className="mb-6 font-mono text-sm text-[#A3F323]">
                {selectedProject.category}
              </p>
              {selectedProject.image && (
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setImageExpanded((value) => !value)}
                    aria-label={imageExpanded ? "Reduce project screenshot" : "Enlarge project screenshot"}
                    aria-pressed={imageExpanded}
                    className="block w-full cursor-zoom-in border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F323]"
                  >
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} application screenshot`}
                      className={`block w-full h-auto ${imageExpanded ? "max-h-none object-contain" : "max-h-72 object-cover object-top"}`}
                      decoding="async"
                    />
                  </button>
                  <p className="mt-2 font-mono text-xs text-gray-400">Click screenshot to {imageExpanded ? "reduce" : "expand"} image</p>
                </div>
              )}
              <div id="project-details-description" className="space-y-7">
                <section>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">Project overview</h4>
                  <p className="leading-relaxed text-gray-200">
                    {selectedProject.caseStudy?.overview ?? selectedProject.info}
                  </p>
                </section>
                {selectedProject.caseStudy && (
                  <>
                    <section>
                      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">Key features</h4>
                      <ul className="space-y-3 text-gray-200">
                        {selectedProject.caseStudy.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 leading-relaxed">
                            <span aria-hidden="true" className="mt-1 text-[#A3F323]">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    {selectedProject.caseStudy.contribution && (
                      <section>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">My contribution</h4>
                        <p className="leading-relaxed text-gray-200">{selectedProject.caseStudy.contribution}</p>
                      </section>
                    )}
                    {selectedProject.caseStudy.challenges && (
                      <section>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">Engineering challenges</h4>
                        <ul className="space-y-3 text-gray-200">
                          {selectedProject.caseStudy.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-3 leading-relaxed">
                              <span aria-hidden="true" className="mt-1 text-[#A3F323]">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                    <section>
                      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">Technical implementation</h4>
                      <p className="leading-relaxed text-gray-200">{selectedProject.caseStudy.engineering}</p>
                    </section>
                    <section>
                      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#A3F323]">What the project delivers</h4>
                      <p className="leading-relaxed text-gray-200">{selectedProject.caseStudy.outcome}</p>
                    </section>
                  </>
                )}
              </div>
              <div className="my-8 border-t border-white/20" />
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Technologies used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.split(", ").map((tool) => (
                  <span key={tool} className="border border-white/30 px-3 py-2 font-mono text-xs">
                    {tool}
                  </span>
                ))}
              </div>
              {selectedProject.link !== "#" ? (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A3F323] underline underline-offset-4">
                  Visit project <FaExternalLinkAlt aria-hidden="true" size={11} />
                </a>
              ) : (
                <p className="mt-8 text-xs text-gray-400">A public project link is not currently available.</p>
              )}
            </div>
          </div>
        )}

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
              aria-label={`Go to project page ${p}`}
              aria-current={p === page ? "page" : undefined}
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
