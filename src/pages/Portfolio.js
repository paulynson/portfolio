import React from 'react'
import wk1 from '../assets/images/wk1.PNG'
import wk2 from '../assets/images/wk2.PNG'
import wk3 from '../assets/images/wk3.PNG'

function Portfolio() {
    return (
        <div>
      <div className="container my-5 p-5">
    <h5 className="font-weight-bold my-5">MY LATEST WORK</h5>
    <hr/>

    <div className="card-deck container mt-5">

{/* first row */}
<div className="card shadow">

<a href="https://1q0mv.csb.app" target="_blank">   <img src={wk3}  className="img-fluid" alt=""/> </a>

    <div className="card-body">
    <h6 className="text-lg-left">Creating Website</h6>

    <p className="text-lg-left text-muted"><small>Side Project</small></p>
</div>

</div>

{/* second row */}
<div className="card shadow">
    <a href="http://leisure-lawn.com" target="_blank">   <img src={wk1}  className="img-fluid" alt=""/> </a>

    <div className="card-body">
    <h6 className="text-lg-left">Creating Website for Leisure Lawn Business</h6>

    <p className="text-lg-left text-muted"><small>Website Design</small></p>
</div>
</div>

{/* Third row */}
<div className="card shadow">
<a href="http://mobiletoiletsystems.com.ng" target="_blank">   <img src={wk2}  className="img-fluid" alt=""/> </a>
<div className="card-body">
    <h6 className="text-lg-left">Creating a portable toilet system website</h6>

    <p className="text-lg-left text-muted"><small>Website Design with WordPress</small></p>
</div>
</div>

{/* Forth row */}
<div className="card shadow">

<a href="https://1q0mv.csb.app" target="_blank">   <img src=""  className="img-fluid" alt=""/> </a>

    <div className="card-body">
    <h6 className="text-lg-left">Creating Website</h6>

    <p className="text-lg-left text-muted"><small>Side Project</small></p>
</div>


</div>

   </div>
   </div>
   </div>
    
    )
}

export default Portfolio
