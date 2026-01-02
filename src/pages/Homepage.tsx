// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { useEffect, useRef } from "react";
// import About from "./About";
// import Portfolios from "../component/Portfolios";
// import { FaArrowDown } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// import Contact from "./Contact";

// const Homepage = () => {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const contentRef = useRef<HTMLDivElement | null>(null);
//   const designRef = useRef<HTMLDivElement | null>(null);
//   const designTwoRef = useRef<HTMLDivElement | null>(null);
//   const div1Ref = useRef<HTMLDivElement | null>(null);
//   const div2Ref = useRef<HTMLDivElement | null>(null);
//   const div3Ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     interface MouseMoveEvent extends MouseEvent {
//       clientX: number;
//       clientY: number;
//     }

//     const handleMouseMove = (e: MouseMoveEvent) => {
//       if (!heroRef.current) return;

//       const rect = heroRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       const rotateX = ((y - centerY) / centerY) * 10; // Max 10 degrees
//       const rotateY = ((centerX - x) / centerX) * 10; // Max 10 degrees

//       const translateX = ((x - centerX) / centerX) * 20; // Max 20px movement
//       const translateY = ((y - centerY) / centerY) * 20; // Max 20px movement

//       // Apply 3D transforms to the animated balls/divs (main focus)
//       if (div1Ref.current) {
//         div1Ref.current.style.transform = `
//         perspective(1000px)
//         rotateX(${rotateX * 0.8}deg)
//         rotateY(${rotateY * 0.8}deg)
//         translateX(${translateX * 0.6}px)
//         translateY(${translateY * 0.6}px)
//         translateZ(${translateX * 0.3}px)
//       `;
//       }

//       if (div2Ref.current) {
//         div2Ref.current.style.transform = `
//         perspective(1000px)
//         rotateX(${rotateX * -0.6}deg)
//         rotateY(${rotateY * -0.6}deg)
//         translateX(${translateX * -0.4}px)
//         translateY(${translateY * -0.4}px)
//         translateZ(${translateY * 0.2}px)
//       `;
//       }

//       if (div3Ref.current) {
//         div3Ref.current.style.transform = `
//         perspective(1000px)
//         rotateX(${rotateX * 0.4}deg)
//         rotateY(${rotateY * 0.4}deg)
//         translateX(${translateX * 0.3}px)
//         translateY(${translateY * 0.3}px)
//         translateZ(${translateX * -0.2}px)
//       `;
//       }

//       // Apply subtle background parallax
//       if (designRef.current) {
//         designRef.current.style.transform = `
//         translateX(${translateX * 0.1}px)
//         translateY(${translateY * 0.1}px)
//       `;
//       }

//       if (designTwoRef.current) {
//         designTwoRef.current.style.transform = `
//         translateX(${translateX * -0.1}px)
//         translateY(${translateY * -0.1}px)
//       `;
//       }
//     };

//     const handleMouseLeave = () => {
//       // Reset all transforms when mouse leaves
//       const elements = [
//         contentRef.current,
//         designRef.current,
//         designTwoRef.current,
//         div1Ref.current,
//         div2Ref.current,
//         div3Ref.current,
//       ];

//       elements.forEach((element) => {
//         if (element) {
//           element.style.transform = "";
//           element.style.transition = "transform 0.3s ease-out";
//           setTimeout(() => {
//             element.style.transition = "";
//           }, 300);
//         }
//       });
//     };

//     const heroElement = heroRef.current;
//     if (heroElement) {
//       heroElement.addEventListener("mousemove", handleMouseMove);
//       heroElement.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       if (heroElement) {
//         heroElement.removeEventListener("mousemove", handleMouseMove);
//         heroElement.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <div className="mx-auto ">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>
//           Home | About Paul Abakada | UI Designer &amp; Front End Developer
//         </title>
//         <link rel="canonical" href="https://abakadapaul.netlify.app/" />
//       </Helmet>
//       <div>
//         <nav
//           ref={heroRef}
//           className="relative overflow-hidden shadow-lg heroImage"
//           style={{
//             transformStyle: "preserve-3d",
//             perspective: "1000px",
//           }}
//         >
//           <div
//             ref={designRef}
//             className="design"
//             style={{
//               transition: "transform 0.1s ease-out",
//               willChange: "transform",
//             }}
//           ></div>
//           <div
//             ref={designTwoRef}
//             className="design_two"
//             style={{
//               transition: "transform 0.1s ease-out",
//               willChange: "transform",
//             }}
//           ></div>

//           {/* <!-- this div class is for the animations --> */}
//           <div>
//             <div
//               ref={div1Ref}
//               className="div"
//               style={{
//                 transition: "transform 0.1s ease-out",
//                 willChange: "transform",
//               }}
//             ></div>
//             <div
//               ref={div2Ref}
//               className="div1"
//               style={{
//                 transition: "transform 0.1s ease-out",
//                 willChange: "transform",
//               }}
//             ></div>
//             <div
//               ref={div3Ref}
//               className="div2"
//               style={{
//                 transition: "transform 0.1s ease-out",
//                 willChange: "transform",
//               }}
//             ></div>
//           </div>
//           {/* <!-- end of the div animation --> */}

//           <div
//             ref={contentRef}
//             className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//           >
//             <div className="text-center">
//               <h1
//                 className="p-2 mb-6 text-6xl font-bold text-dark dark:text-gray-900 lg:text-6xl lg:leading-normal "
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//               >
//                 I'll make your Website Responsive and Beautiful
//               </h1>

//               <div className="flex items-center justify-center ">
//                 <a
//                   href="#portfolio"
//                   className=" bg-gray-800 rounded-lg py-[0.75rem] hover:animate-pulse dark:bg-lime-500 dark:text-gray-800 font-bold px-4 text-white flex  group justify-center items-center w-32"
//                 >
//                   <span>Projects</span>{" "}
//                   <span className="rounded-full p-[2px] border-2 ml-2 hidden group-hover:flex dark:border-gray-800">
//                     <FaArrowDown className="text-xs text-white border-white animate-pulse dark:text-gray-800" />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <main className="">
//           <Portfolios />

//           <About />

//           <Contact />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

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
          Paul Abakada | Frontend & Mobile Developer | React, React Native, TypeScript
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>

      {/* Ultra Modern Hero Section */}
      <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center px-4 sm:px-6">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(163, 243, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 243, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#A3F323] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#A3F323] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="mb-6 sm:mb-8">
              <div className="text-[#A3F323] text-xs sm:text-sm font-mono mb-3 sm:mb-4 tracking-wider">
                &gt; FRONTEND_DEVELOPER.initialize()
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4 sm:mb-6">
                PAUL
                <span className="block text-[#A3F323] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">ABAKADA</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-2xl">
                <span className="text-[#A3F323]">//</span> Frontend & Mobile Developer with 3+ years
                <span className="block">building modern, scalable applications.</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a
                href="#portfolio"
                className="group bg-[#A3F323] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-none font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit"
              >
                <span>VIEW PROJECTS</span>
                <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="border-2 border-[#A3F323] text-[#A3F323] px-6 sm:px-8 py-3 sm:py-4 rounded-none font-bold text-base sm:text-lg hover:bg-[#A3F323] hover:text-black transition-all duration-300 w-full sm:w-fit text-center"
              >
                GET IN TOUCH
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="text-gray-500 text-xs sm:text-sm font-mono">
                CONNECT_WITH_ME:
              </div>
              <a
                href="https://github.com/paulynson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A3F323] transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
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
