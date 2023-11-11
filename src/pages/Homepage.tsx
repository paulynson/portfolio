// import { Link } from "react-router-dom";
import About from "./About";
import Portfolios from "../component/Portfolios";
import { FaArrowDown } from "react-icons/fa";
import { Helmet } from "react-helmet";

import Contact from "./Contact";

const Homepage = () => {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Home | About Paul Abakada | UI Designer &amp; Front End Developer
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>
      <div>
        <nav className="relative heroImage shadow-lg ">
          <div className="design"></div>
          <div className="design_two"></div>

          {/* <!-- this div class is for the animations --> */}
          <div>
            <div className="div"></div>
            <div className="div1"></div>
            <div className="div2"></div>
          </div>
          {/* <!-- end of the div animation --> */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
              <h1
                className="text-dark mb-6 lg:text-6xl lg:leading-normal text-6xl font-bold p-2 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                I'll make your Website Responsive and Beautiful
              </h1>

              <div className="flex justify-center items-center ">
                <a
                  href="#portfolio"
                  className=" bg-black rounded-lg py-[0.75rem] hover:animate-pulse px-4 text-white flex  group justify-center items-center w-32"
                >
                  <span>Projects</span>{" "}
                  <span className="rounded-full p-[2px] border-2 ml-2 hidden group-hover:flex">
                    <FaArrowDown className="text-white animate-pulse border-white text-xs " />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="">
          <Portfolios />

          <About />

          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
