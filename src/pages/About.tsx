import about from "../assets/images/about.png";

function About() {
  const devTools = [
    {
      id: 1,
      list: "VScode",
    },
    {
      id: 2,
      list: "Google Chrome Inspect Tools",
    },
    {
      id: 3,
      list: "GitHub",
    },
    {
      id: 4,
      list: "Netlify",
    },
    {
      id: 4,
      list: "Postman",
    },
  ];

  const desTools = [
    {
      id: 1,
      list: "Figma",
    },

    {
      id: 2,
      list: "Adobe Photoshop",
    },
  ];
  return (
    <div className=" max-w-screen-xl mx-auto py-16" id="about">
      <section>
        <div className="rounded-xl px-5 gap">
          <div className="flex justify-center  text-center items-center">
            <div className="max-w-2xl">
              <h2
                className="text-gray-800 dark:text-lime-500 font-bold text-center text-3xl mb-8 uppercase"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                About me
              </h2>
              <div
                className=" flex justify-center items-center text-center "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={about}
                  className="w-48 h-48 rounded-full border border-gray-300 bg-blue-200"
                  alt="about-img"
                />
              </div>
              <article className="py-16 text-center text-lg">
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="mb-5 text-center"
                >
                  I'm a Frontend Developer and a UI designer based in Lagos
                  State, Nigeria.
                </p>

                <p
                  className="text-center mb-5"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  I love solving complex problems that gives me more idea
                  turning it to something beautiful and eye catching which also
                  gives me the innovation to work with pixels as a great tool of
                  beauty. When I'm not coding, I love playing football or video
                  games.
                </p>

                <p
                  className="mb-6 block"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Interested in collaborating or investing? I'm always open to
                  discussing Web Development, Product Design, work or
                  partnership opportunities.
                </p>
                <div className="mt-8">
                  <a
                    className="my-2 bg-gray-800 rounded-lg py-3 px-4 text-white hover:animate-pulse dark:bg-lime-500 dark:text-gray-800 font-bold"
                    href="#contact"
                  >
                    Start a Conversation
                  </a>
                </div>
              </article>
              {/* <code>I use this for practice</code> */}
            </div>
          </div>
        </div>

        {/* Bootstrap Icon Arrow */}

        <div className="flex flex-col gap-10 mx-4 xl:mx-0 lg:mx-0 md:mx-0">
          <div
            className="dark:bg-gray-800 shadow-md rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="shadow py-6 lg:px-12 px-5">
              <h3
                className="text-left text-xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Front-end Developer
              </h3>
              <p
                className="text-left mt-3"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>

              <h4
                className="text-primary mt-5 font-bold underline"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Languages I Speak:
              </h4>
              <p data-aos="fade-right" data-aos-duration="1000">
                {" "}
                <span className="text-blue-500 mr-2">HTML5</span>
                <span className="text-green-500 mr-2">Bootstrap</span>
                <span className="text-blredue-500 mr-2">Tailwind</span>
                <span className="text-purple-500 mr-2">CSS3</span>
                <span className="text-pink-500 mr-2">SASS</span>
                <span className="text-blue-500 mr-2">JavaScript</span>
                <span className="text-blue-500 mr-2">React Js</span>
                <span className="text-orange-500 mr-2">Next Js</span>
                <span className="text-violet-500 mr-2">Typescript</span>
                <span className="text-lime-500 mr-2">Node Js</span>
                <span className="text-cyan-500 mr-2">Express Js</span>
              </p>

              <h4 className="text-primary mt-5 font-bold underline">
                Dev Tools:
              </h4>
              <ul className="list-group">
                {devTools.map((devs) => (
                  <div key={devs.id}>
                    <li className="list-group-item">{devs.list}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Design Aspect */}

          <div
            className="dark:bg-gray-800 shadow-md rounded-lg"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="shadow py-6 lg:px-12 px-5">
              <h3
                className="text-left text-xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                UI Designer
              </h3>
              <p
                className="text-left mt-3"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>

              <h4
                className="text-primary mt-5 font-bold underline"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Things I enjoy designing:
              </h4>
              <p data-aos="fade-up" data-aos-duration="1000">
                {" "}
                <span className="text-lime-500 mr-2">UI</span>
                <span className="text-pink-500 mr-2">Web</span>
                <span className="text-blue-500 mr-2">Mobile</span>
                <span className="text-orange-500 mr-2">Logos</span>
              </p>

              <h4 className="text-primary mt-5 font-bold underline">
                Design Tools:
              </h4>
              <ul className="list-group">
                {desTools.map((designs) => (
                  <span key={designs.id}>
                    <li className="list-group-item">{designs.list}</li>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center my-5 h-50" id="portfolio"></div>
      </section>
    </div>
  );
}

export default About;
