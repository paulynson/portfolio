import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div>
             <div className=" p-2 my-5 d-flex justify-content-center align-items-center text-center">
             <div className="row container">
             <div className="d-flex justify-content-center container">
            <h5 className="my-5">Thanks for taking the time to reach out. How can I help you today?</h5>
            </div>


<div className="col-lg-12">

    <div className="justify-content-center d-flex flex-sm-column flex-md-column">
    <div className="mt-2 mx-3">
    <button className="btn btn-dark my-3 form-control reachme"><a href="mailto:paulabakada@gmail.com">E-Mail Me</a></button>
    </div>
         
    <div className="mt-2 mx-3">
    <button className="btn btn-dark my-3 form-control reachme"><a href="tel:08125157424">Call Me</a></button>
    </div>
    </div>


 
<div className="text-center text-dark align-items-center mx-4 text-center">
<div className="py-1 my-3"><a href="https://www.facebook.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-dark "> <FaFacebook /> Like me on Facebook </a> </div>
<div className="py-1 my-3"><a href="https://twitter.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-dark "> <FaTwitter /> Follow me on Twitter </a> </div>
<div className="py-1 my-3"><a href="https://www.instagram.com/Abakadapaul/" target="-blank" rel="noreferrer" className="text-dark"> <FaInstagram /> Follow me on Instagram </a>  </div>
<div className="py-1 my-3"><a href="https://github.com/paulynson" className="text-dark" target="-blank" rel="noreferrer"> <FaGithub /> Connect on GitHub </a>  </div>
  </div>
 


</div>

</div>

</div>

        </div>
    )
}



export default Contact

