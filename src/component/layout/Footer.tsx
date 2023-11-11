import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const tDate = date.getFullYear();

  return (
    <footer className="footer mt-auto py-5 text-center mx-auto max-w-screen-2xl px-6  w-full">
      <div className=" text-gray-800">
        <span className="text-sm font-bold dark:text-lime-500">
          &copy; {tDate} Paul Abakada
        </span>
      </div>

      <div className="mt-3 flex justify-center text-gray-800  hover:text-gray-300 ">
        <a
          href="https://twitter.com/codefraction__/"
          target="-blank"
          rel="noreferrer"
          className=" hover:text-gray-300  px-3"
        >
          {" "}
          <FaTwitter className="text-gray-800 dark:text-gray-100 hover:scale-125 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://instagram.com/Abakadapaul/"
          target="-blank"
          rel="noreferrer"
          className=" hover:text-gray-300  px-3"
        >
          {" "}
          <FaInstagram className="text-gray-800 dark:text-gray-100 hover:scale-125 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://github.com/paulynson"
          target="-blank"
          rel="noreferrer"
          className=" hover:text-gray-300  px-3"
        >
          {" "}
          <FaGithub className="text-gray-800 dark:text-gray-100 hover:scale-125 hover:text-blue-700" />{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
