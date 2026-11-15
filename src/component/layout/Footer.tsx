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

      <div className="mt-3 flex justify-center text-gray-800">
        <a
          href="https://twitter.com/codefraction__/"
          aria-label="Visit Paul Abakada on X (opens in a new tab)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F323]"
        >
          {" "}
          <FaTwitter className="text-gray-800 dark:text-gray-100 hover:scale-110 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://instagram.com/Abakadapaul/"
          aria-label="Visit Paul Abakada on Instagram (opens in a new tab)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F323]"
        >
          {" "}
          <FaInstagram className="text-gray-800 dark:text-gray-100 hover:scale-110 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://github.com/paulynson"
          aria-label="Visit Paul Abakada on GitHub (opens in a new tab)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F323]"
        >
          {" "}
          <FaGithub className="text-gray-800 dark:text-gray-100 hover:scale-110 hover:text-blue-700" />{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
