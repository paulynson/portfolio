// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./component/layout/NavbarComponent";
import Footer from "./component/layout/Footer";
import { Helmet } from "react-helmet";
import Homepage from "./pages/Homepage";
import NoActivePage from "./pages/NoActivePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsSun } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [theme, setTheme] = useState(() => {
    // Use a callback function to retrieve the theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light"; // Default to 'light' if no theme is stored
  });

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    function onWindowMatch() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && darkQuery.matches)
      ) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }

    onWindowMatch(); // Initial setup

    const mediaQueryListener = () => {
      onWindowMatch();
    };

    darkQuery.addListener(mediaQueryListener);

    return () => {
      darkQuery.removeListener(mediaQueryListener);
    };
  }, [element, darkQuery]);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        element.classList.remove("light");
        localStorage.removeItem("theme");
    }
  }, [element, theme]);

  return (
    <div className="mx-auto max-w-screen-[2400px] relative min-h-screen dark:text-gray-50 dark:bg-gray-900 duration-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Paul Abakada | UI Designer &amp; Front End Developer
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>
      <div
        className={`fixed right-0 top-1/2 z-50 duration-100 dark:bg-slate-700 border-2  rounded-l-xl  ${
          theme === "light" ? "bg-gray-100" : "bg-gray-800"
        }`}
      >
        <button
          className={`px-3 py-2 rounded text-sky-600 text-xl font-bold `}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? <BsSun /> : <BsFillMoonFill />}
        </button>
      </div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoActivePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
