import About from "./About";
import Portfolios from "../component/Portfolios";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Contact from "./Contact";
const Homepage = () => {
  return (
    <div className="mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Paul Abakada | Frontend Engineer | React, Next.js, TypeScript
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>
      {/* Ultra Modern Hero Section */}
      <section data-pointer-spotlight className="pointer-spotlight min-h-screen bg-black dark:bg-[#1b4444] text-white dark:text-white relative overflow-hidden flex items-center px-4 sm:px-6 transition-colors duration-500">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 hero-background-grid" style={{
            backgroundImage: `
              linear-gradient(rgba(163, 243, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 243, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}></div>
        </div>
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute inset-0 hidden overflow-hidden sm:block">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#A3F323] rounded-full motion-safe:animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6">
          <div className="max-w-4xl">
            <div className="mb-6 sm:mb-8 hero-enter">
              <div className="text-[#A3F323] text-xs sm:text-sm font-mono mb-3 sm:mb-4 tracking-wider">
                &gt; FRONTEND_ENGINEER.initialize()
              </div>
              <h1 className="mb-4 text-4xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl sm:mb-6">
                PAUL
                <span className="block text-[#A3F323] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">ABAKADA</span>
              </h1>
              <div className="max-w-2xl mb-6 text-lg text-gray-400 sm:text-xl md:text-2xl sm:mb-8">
                <span className="text-[#A3F323]">//</span> Frontend Engineer. React. Next.js. TypeScript.
                <span className="block hero-type-line">I engineer reliable, scalable web and mobile products</span>
                <span className="block">with a focus on architecture, performance and maintainable frontend systems.</span>
              </div>
            </div>
            <div className="flex gap-4 mb-8 flex-col sm:gap-6 sm:mb-12 hero-enter hero-enter-delayed">
              <a
                href="#portfolio"
                data-pointer-magnetic
                className="magnetic-action group bg-[#A3F323] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-none font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit"
              >
                <span>VIEW PROJECTS</span>
                <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="#contact"
                data-pointer-magnetic
                className="magnetic-action border-2 border-[#A3F323] text-[#A3F323] px-6 sm:px-8 py-3 sm:py-4 rounded-none font-bold text-base sm:text-lg hover:bg-[#A3F323] hover:text-black transition-all duration-300 w-full sm:w-fit text-center"
              >
                GET IN TOUCH
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 hero-enter hero-enter-delayed">
              <div className="font-mono text-xs text-gray-500 sm:text-sm">

                CONNECT_WITH_ME:

              </div>

              <a

                href="https://github.com/paulynson"
                aria-label="View GitHub profile (opens in a new tab)"

                target="_blank"

                rel="noopener noreferrer"

                className="text-gray-400 hover:text-[#A3F323] transition-colors duration-300"

              >

                <FaGithub size={24} aria-hidden="true" />

              </a>

            </div>

          </div>

        </div>



        {/* Scroll Indicator - Hidden on mobile */}

        <div className="absolute hidden transform -translate-x-1/2 bottom-8 left-1/2 sm:block">

          <div className="w-px h-16 bg-gradient-to-b from-[#A3F323] to-transparent"></div>

          <div className="text-[#A3F323] text-xs font-mono mt-2 rotate-90 origin-center whitespace-nowrap">

            SCROLL_DOWN

          </div>

        </div>

      </section>



      {/* Main Content */}

      <main>

        <Portfolios />

        <About />

        <Contact />

      </main>

    </div>

  );

};



export default Homepage;

