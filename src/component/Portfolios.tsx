import projects from "./Projects";

const Projects = () => {
  return (
    <div className="pt-16" id="portfolio">
      <section className="">
        <h2
          className="text-3xl font-bold text-center mt-5 uppercase"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Projects
        </h2>

        <div className=" grid grid-cols-12 gap-8 gap-y-8 py-12 px-6 lg:px-0 mx-auto max-w-screen-xl">
          {projects.map((project) => (
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 shadow-xl px-4 rounded-lg py-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={project.id}
            >
              {/* <div key={project.id} className="shadow"> */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="linkme hover:bg-opacity-20"
              >
                {" "}
                <img
                  src={project.pix}
                  className="rounded-sm shadow-xl "
                  alt={project.title}
                />{" "}
                <div className="my-4">
                  <p className="text-left text-gray-800 font-bold">
                    {project.title}
                  </p>
                  <p className="text-left py-1 text-sm text-pink-500">
                    {project.info}
                  </p>

                  <button className="text-left  text-md font-normal text-blue-400  ">
                    {project.tools}
                  </button>
                </div>
              </a>
              {/* </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
