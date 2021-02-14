import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

function NoActivePage() {
    return (
        <div className="text-dark p-5 mt-5 notFound bg-warning">

            {/* <!-- this div class is for the animations --> */}
           <div class="div"></div>
           <div class="div1"></div>
           <div class="div2"></div>
    {/* <!-- end of the div animation --> */}

            <h1 className="text-center">404</h1>
            <h3 className="text-dark text-uppercase">PAGE NOT FOUND</h3>

            <div className="mt-3 d-flex justify-content-center text-white">
<a href="https://www.facebook.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-dark px-3"> <FaFacebook /> </a> 
<a href="https://twitter.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-dark px-3"> <FaTwitter /> </a>
<a href="https://instagram.com/Abakadapaul/" target="-blank" rel="noreferrer"  className="text-dark px-3"> <FaInstagram /> </a> 
<a href="https://github.com/paulynson" target="-blank" rel="noreferrer" className="text-dark px-3"> <FaGithub /> </a> 
  </div>

  <div className="mt-5 display-5">

<Link to="/" className=" btn btn-dark"> Back Home </Link> 
</div>

        </div>
    )
}

export default NoActivePage
