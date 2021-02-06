import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div>
             <div className="bg-light p-5 mt-5 d-flex justify-content-center align-items-center text-center">
             <div className="row container">
             <div className="d-flex justify-content-center container">
            <h5 className="my-5">Thanks for taking the time to reach out. How can I help you today?</h5>
            </div>


<div className="col-lg-6">
             <form id="contact-form" className="text-left shadow py-5 px-5" method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn buttonBg">Submit</button>
</form>
</div>

<div className="col-lg-6">
 
<div className="text-left text-dark align-items-center mx-4">
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

