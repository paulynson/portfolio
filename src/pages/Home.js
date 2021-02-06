import React from 'react'
import { Link } from 'react-router-dom'
import wk1 from '../assets/images/wk1.PNG'
import wk2 from '../assets/images/wk2.PNG'
import wk3 from '../assets/images/wk3.PNG'

function Home() {
    return (
        <div>
            <div className="jumbotron heroImage">
            <div className="design">
                            
            </div>
            <div className="design_two">

                </div>

                {/* <!-- this div class is for the animations --> */}
           <div class="div"></div>
           <div class="div1"></div>
           <div class="div2"></div>
    {/* <!-- end of the div animation --> */}



            <div className="row d-flex align-items-center">
                <div className="container col-lg-8 text-lg-center order-sm-2 order-md-2 order-lg-1">
                    <h2 className="text-dark font-weight-bolder">I'll make your Website Responsive and Beautiful</h2>
                <small><p className="text-dark text-lg-center mt-4">I Design (Graphics, Websites & UI Design), Develop Websites, Whiteboard Animation</p></small>

                <div className="mt-4">

                <Link to="/portfolio" className=" btn btn-dark"> Portfolio </Link> 
                </div>


                </div>

                </div>
            </div>

<div className="container my-5">
    <h6 className="font-weight-bold">SOME OF MY LATEST WORK</h6>
    <hr/>

    <div className="card-deck container">

{/* first row */}
<div className="card shadow">

<a href="https://1q0mv.csb.app" target="_blank" rel="noreferrer">   <img src={wk3}  className="img-fluid" alt=""/> </a>

    <div className="card-body">
    <h6 className="text-lg-left">Creating Website</h6>

    <p className="text-lg-left text-muted"><small>Side Project</small></p>
</div>

</div>

{/* second row */}
<div className="card shadow">
    <a href="http://leisure-lawn.com" target="_blank" rel="noreferrer">   <img src={wk1}  className="img-fluid" alt=""/> </a>

    <div className="card-body">
    <h6 className="text-lg-left">Creating Website for Leisure Lawn Business</h6>

    <p className="text-lg-left text-muted"><small>Website Design</small></p>
</div>
</div>

{/* Third row */}
<div className="card shadow">
<a href="http://mobiletoiletsystems.com.ng" target="_blank" rel="noreferrer">   <img src={wk2}  className="img-fluid" alt=""/> </a>
<div className="card-body">
    <h6 className="text-lg-left">Creating a portable toilet system website</h6>

    <p className="text-lg-left text-muted"><small>Website Design with WordPress</small></p>
</div>
</div>


    </div>
</div>


        </div>
    
    )
}

export default Home
