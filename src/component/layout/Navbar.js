import React from 'react'
import pw_logo from '../../assets/images/pw_logo.png'
import menu from '../../assets/images/menu.png'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-darken fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand logoImg" to="#"><img src={pw_logo} alt=""/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> <img src={menu} alt=""/> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav ml-auto mb-2 mb-lg-0">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        
      </div>

      <div className="d-flex justify-content-center text-white mx-4 icons">
<a href="https://www.facebook.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-white px-2"> <FaFacebook /> </a> 
<a href="https://twitter.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-white px-2"> <FaTwitter /> </a>
<a href="https://instagram.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-white px-2"> <FaInstagram /> </a> 
<a href="https://github.com/paulynson" target="-blank" rel="noreferrer" className="text-white px-2"> <FaGithub /> </a> 
  </div>


    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar
