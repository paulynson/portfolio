import React from 'react'
// import { Link } from 'react-router-dom'
import heroimage from '../assets/images/heroimage.png'
import about from '../assets/images/about.png'

function About() {
    return (
        <div>
            
            <div className="bg-white my-5 py-5 px-3">
           
            <div className="row d-flex ">
                <div className="container col-lg-4 text-lg-left order-sm-2 order-md-2 order-lg-1">
                    <h1 className="text-dark font-weight-bolder mt-md-5 mt-sm-5">About me</h1>
                    <h5 className="">I'm a Frontend Developer and a UI designer based in Lagos State, Nigeria.</h5>
                <small><p className="text-muted text-lg-left mt-4">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me cooking, gardening or working out in the park.</p></small>

               
                </div>

                <div className="col-lg-6 text-center order-sm-1 order-md-1 order-lg-2">
                <img src={about} alt=""/>
                
                </div>

              </div>
             
            </div>

            <div className="row py-5 bg-light bg-gradient-light px-5 text-center d-flex justify-content-center">

<div className="col-lg-4 col-md-6 bg-white col-sm-12 col-12 text-center shadow px-5 py-5 mx-md-3 mx-sm-3">
    <h3 className="text-center font-weight-bold">Front-end Developer</h3>
    <p className="text-center mt-3">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

    <h4 className="text-primary mt-5">Languages I Speak:</h4>
    HTML, JavaScript, Bootstrap, CSS, React Js

    <h4 className="text-primary mt-5">Dev Tools:</h4>
    <ul className="list-group">
<li className="list-group-item">VScode</li>
<li className="list-group-item">Atom</li>
<li className="list-group-item">Bootstrap</li>
<li className="list-group-item">Google Chrome</li>
<li className="list-group-item">GitHub</li>
<li className="list-group-item">Netlify</li>
<li className="list-group-item">CodeSandBox</li>

    </ul>
</div>


{/* Design Aspect */}

<div className="col-lg-4 col-md-6 col-sm-12 bg-white col-12 text-center shadow px-5 py-5 mx-5 mx-md-3 mx-sm-3">
    <h3 className="text-center font-weight-bold">Designer</h3>
    <p className="text-center mt-3">I value simple content structure, clean design patterns, and thoughtful interactions.</p>

    <h4 className="text-primary mt-5">Things I enjoy designing:</h4>
   <p> UI, Web, Mobile, Apps, Logos </p>

    <h4 className="text-primary mt-5">Design Tools:</h4>
    <ul className="list-group">
<li className="list-group-item">Figma</li>
<li className="list-group-item">Adobe XD</li>
<li className="list-group-item">Adobe PhotoShop</li>
<li className="list-group-item">CorelDraw</li>
<li className="list-group-item">WhiteBoard Animation</li>


    </ul>
</div>

            </div>


            

        </div>
    )
}

export default About
