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

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useRef, useState } from "react";
import About from "./About";
import Portfolios from "../component/Portfolios";
import { FaArrowDown } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Contact from "./Contact";

const Homepage = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const designTwoRef = useRef<HTMLDivElement | null>(null);
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse move 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      const rotateX = moveY * 15;
      const rotateY = -moveX * 15;
      const translateZ = moveY * 40;

      // Apply to decorative elements only
      [div1Ref, div2Ref, div3Ref, designRef, designTwoRef].forEach((ref, i) => {
        if (ref.current) {
          const multipliers = [
            { rx: 0.8, ry: 0.8, tx: 30, ty: 30, tz: 0.5 }, // div1
            { rx: -0.6, ry: -0.6, tx: -20, ty: -20, tz: -0.3 }, // div2
            { rx: 0.4, ry: 0.4, tx: 15, ty: 15, tz: 0.4 }, // div3
            { rx: 0, ry: 0, tx: 20, ty: 20, tz: -0.1 }, // design1
            { rx: 0, ry: 0, tx: -20, ty: -20, tz: 0.1 }, // design2
          ][i];

          ref.current.style.transform = `
            perspective(1000px)
            rotateX(${rotateX * multipliers.rx}deg)
            rotateY(${rotateY * multipliers.ry}deg)
            translateX(${moveX * multipliers.tx}px)
            translateY(${moveY * multipliers.ty}px)
            translateZ(${translateZ * multipliers.tz}px)
          `;
        }
      });
    };

    const handleMouseLeave = () => {
      [designRef, designTwoRef, div1Ref, div2Ref, div3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = "";
          ref.current.style.transition = "transform 0.5s ease-out";
          setTimeout(() => {
            if (ref.current) ref.current.style.transition = "";
          }, 500);
        }
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Scroll-based 3D effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // Calculate scroll progress (0-1)
      const progress = Math.min(scrollY / (docHeight - windowHeight), 1);
      setScrollProgress(progress);

      // Apply subtle 3D effects to sections
      [aboutRef, portfolioRef].forEach((ref, i) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionProgress = Math.min(
            Math.max(0, (rect.top + rect.height / 2) / windowHeight),
            1
          );

          // Different effects for different sections
          if (i === 0) {
            // About section
            ref.current.style.transform = `
              perspective(1000px)
              rotateX(${5 * (1 - sectionProgress)}deg)
              translateZ(${40 * (1 - sectionProgress)}px)
            `;
            ref.current.style.opacity = `${0.7 + 0.3 * sectionProgress}`;
          } else {
            // Portfolio section
            ref.current.style.transform = `
              perspective(1000px)
              rotateY(${5 * (1 - sectionProgress)}deg)
              translateZ(${-20 * (1 - sectionProgress)}px)
            `;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Home | About Paul Abakada | UI Designer & Front End Developer
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>

      <div>
        {/* Hero Section with 3D elements */}
        <nav
          ref={heroRef}
          className="relative min-h-screen overflow-hidden shadow-lg heroImage"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Decorative background elements */}
          <div
            ref={designRef}
            className="design"
            style={{
              transition: "transform 0.2s ease-out",
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          ></div>
          <div
            ref={designTwoRef}
            className="design_two"
            style={{
              transition: "transform 0.2s ease-out",
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          ></div>

          {/* 3D animated elements */}
          <div style={{ transformStyle: "preserve-3d" }}>
            <div
              ref={div1Ref}
              className="div"
              style={{
                transition: "transform 0.2s ease-out",
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            ></div>
            <div
              ref={div2Ref}
              className="div1"
              style={{
                transition: "transform 0.2s ease-out",
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            ></div>
            <div
              ref={div3Ref}
              className="div2"
              style={{
                transition: "transform 0.2s ease-out",
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            ></div>
          </div>

          {/* Hero content - stable text */}
          <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <h1 className="p-2 mb-6 text-6xl font-bold text-dark dark:text-gray-900 lg:text-6xl lg:leading-normal">
              I'll make your Website Responsive and Beautiful
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="#portfolio"
                className="bg-gray-800 rounded-lg py-[0.75rem] hover:animate-pulse dark:bg-lime-500 dark:text-gray-800 font-bold px-4 text-white flex group justify-center items-center w-32"
              >
                <span>Projects</span>
                <span className="rounded-full p-[2px] border-2 ml-2 hidden group-hover:flex dark:border-gray-800">
                  <FaArrowDown className="text-xs text-white border-white animate-pulse dark:text-gray-800" />
                </span>
              </a>
            </div>
          </div>
        </nav>

        {/* Portfolio sections with scroll effects */}
        <main className="relative" style={{ perspective: "1000px" }}>
          <div
            ref={portfolioRef}
            className="transition-transform duration-500 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Portfolios />
          </div>

          <div
            ref={aboutRef}
            className="transition-transform duration-500 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <About />
          </div>

          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
