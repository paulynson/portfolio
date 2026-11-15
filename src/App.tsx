import "./App.css";
import { usePointerEffects } from "./hooks/usePointerEffects";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./component/layout/NavbarComponent";
import Footer from "./component/layout/Footer";
import { Helmet } from "react-helmet";
import Homepage from "./pages/Homepage";
import NoActivePage from "./pages/NoActivePage";
import { BsSun } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

function App() {
  usePointerEffects();
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  const element = document.documentElement;

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
          Paul Abakada | Senior Frontend Engineer | React, Next.js, TypeScript
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
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
        >
          {theme === "light" ? <BsSun /> : <BsFillMoonFill />}
        </button>
      </div>
      <div id="cursor-glow" aria-hidden="true" className="cursor-glow" />
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
