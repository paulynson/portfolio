import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function Footer() {
    return (
        <div>
            <footer class="footer mt-auto py-3 navbar-dark bg-darken">
  <div class="container text-white">
    <span class="text-muted">&copy; {tDate} Paul Abakada</span>
  </div>

  <div className="mt-3 d-flex justify-content-center text-white">
<a href="https://www.facebook.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-white px-3"> <FaFacebook /> </a> 
<a href="https://twitter.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-white px-3"> <FaTwitter /> </a>
<a href="https://instagram.com/Abakadapaul/" target="-blank" rel="noreferrer"  className="text-white px-3"> <FaInstagram /> </a> 
<a href="https://github.com/paulynson" target="-blank" rel="noreferrer" className="text-white px-3"> <FaGithub /> </a> 
  </div>
</footer>
        </div>
    )
}

export default Footer

const date = new Date();
const tDate = date.getFullYear();
