import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const tDate = date.getFullYear();

  return (
    <footer className="footer mt-auto py-5 text-center mx-auto max-w-screen-2xl px-6 bg-slate-50 w-full">
      <div className=" text-gray-800">
        <span className="text-sm font-bold">&copy; {tDate} Paul Abakada</span>
      </div>

      <div className="mt-3 flex justify-center text-black hover:text-gray-300 ">
        <a
          href="https://twitter.com/codefraction__/"
          target="-blank"
          rel="noreferrer"
          className="text-black hover:text-gray-300  px-3"
        >
          {" "}
          <FaTwitter className="icon-link hover:scale-125 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://instagram.com/Abakadapaul/"
          target="-blank"
          rel="noreferrer"
          className="text-black hover:text-gray-300  px-3"
        >
          {" "}
          <FaInstagram className="icon-link hover:scale-125 hover:text-blue-700" />{" "}
        </a>
        <a
          href="https://github.com/paulynson"
          target="-blank"
          rel="noreferrer"
          className="text-black hover:text-gray-300  px-3"
        >
          {" "}
          <FaGithub className="icon-link hover:scale-125 hover:text-blue-700" />{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
