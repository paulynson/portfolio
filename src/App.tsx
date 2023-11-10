// import logo from './logo.svg';
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./component/layout/NavbarComponent";
import Footer from "./component/layout/Footer";
import { Helmet } from "react-helmet";
import Homepage from "./pages/Homepage";
import NoActivePage from "./pages/NoActivePage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-auto max-w-screen-2xl relative min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Paul Abakada | UI Designer &amp; Front End Developer
        </title>
        <link rel="canonical" href="https://abakadapaul.netlify.app/" />
      </Helmet>
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
