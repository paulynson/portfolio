// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { MdCall } from "react-icons/md";

function Contact() {
  return (
    <div className="mb-8 mx-4 xl:mx-0 lg:mx-0 md:mx-0  px-4 h-[75vh] flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="py-5 text-center " id="contact">
        <h2
          className="mb-8 text-3xl font-bold text-center text-gray-800 uppercase dark:text-lime-500"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Contact
        </h2>

        <div className="text-center">
          <h5 className="my-5" data-aos="fade-right" data-aos-duration="1000">
            Thanks for taking the time to reach out. How can I help you today?
          </h5>
        </div>

        <div className="flex items-center justify-center px-6 ">
          <div className="">
            <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-center ">
              <a
                href="mailto:paulabakada@gmail.com"
                className="flex items-center gap-1 text-gray-800 bg-white border-2 border-gray-800 dark:text-gray-800 dark:bg-lime-300 reachme group"
                data-aos="fade-up"
              >
                <BiSolidPencil className="hidden text-gray-800 group-hover:flex" />{" "}
                <span>Write to Me</span>{" "}
              </a>

              <a
                href="tel:08125157424"
                className="flex items-center gap-1 text-gray-800 bg-white border-2 border-gray-800 dark:bg-lime-300 dark:text-gray-800 group reachme"
                data-aos="fade-down"
              >
                <MdCall className="hidden text-gray-800 group-hover:flex" />
                <span> Schedule Call</span>{" "}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 my-8">
              {/* <a
                href="https://twitter.com/codefraction__/"
                target="-blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-500 group"
              >
                {" "}
                <FaTwitter className="group-hover:animate-ping" />{" "}
                <span className="" data-aos="fade-down">
                  Follow me on Twitter{" "}
                </span>
              </a> */}
              {/* <a
                href="https://www.instagram.com/Abakadapaul/"
                target="-blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 hover:text-pink-500 group"
              >
                <FaInstagram className="group-hover:animate-ping" />{" "}
                <span className="" data-aos="fade-up">
                  Follow me on Instagram
                </span>{" "}
              </a> */}
              <a
                href="https://github.com/paulynson"
                className="flex items-center justify-center gap-2 hover:text-lime-500 group"
                target="-blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithub className="group-hover:animate-ping" />{" "}
                <span className="" data-aos="fade-down">
                  Connect on GitHub{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
