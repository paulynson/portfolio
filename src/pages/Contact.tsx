import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { MdCall } from "react-icons/md";

function Contact() {
  return (
    <div className="mb-8 mx-4 xl:mx-0 lg:mx-0 md:mx-0  h-[60vh] flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className=" py-5 text-center" id="contact">
        <h2
          className="text-gray-800 dark:text-lime-500 font-bold text-center text-3xl mb-8 uppercase"
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

        <div className=" flex items-center  px-6 justify-center">
          <div className="">
            <div className=" text-center items-center flex justify-center gap-6 font-bold flex-wrap">
              <a
                href="mailto:paulabakada@gmail.com"
                className=" bg-white dark:text-gray-800 dark:bg-lime-300 text-gray-800 flex items-center gap-1 border-2 border-gray-800 reachme group"
                data-aos="fade-up"
              >
                <BiSolidPencil className="text-gray-800 hidden group-hover:flex" />{" "}
                <span>Write to Me</span>{" "}
              </a>

              <a
                href="tel:08125157424"
                className=" bg-white dark:bg-lime-300 dark:text-gray-800 group flex items-center gap-1 border-2 border-gray-800 text-gray-800 reachme "
                data-aos="fade-down"
              >
                <MdCall className="text-gray-800 hidden group-hover:flex" />
                <span> Schedule Call</span>{" "}
              </a>
            </div>

            <div className="flex gap-6 flex-wrap my-8 items-center justify-center">
              <a
                href="https://twitter.com/codefraction__/"
                target="-blank"
                rel="noreferrer"
                className="flex justify-center gap-2 items-center hover:text-blue-500 group"
              >
                {" "}
                <FaTwitter className="group-hover:animate-ping" />{" "}
                <span className="" data-aos="fade-down">
                  Follow me on Twitter{" "}
                </span>
              </a>
              <a
                href="https://www.instagram.com/Abakadapaul/"
                target="-blank"
                rel="noreferrer"
                className="flex justify-center gap-2 items-center hover:text-pink-500 group"
              >
                <FaInstagram className="group-hover:animate-ping" />{" "}
                <span className="" data-aos="fade-up">
                  Follow me on Instagram
                </span>{" "}
              </a>
              <a
                href="https://github.com/paulynson"
                className="flex justify-center gap-2 items-center hover:text-lime-500 group"
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
