import React from 'react';
// import { Link } from 'react-router-dom'
import about from '../assets/images/about.png';
import { FaArrowDown } from 'react-icons/fa';

function About() {
  return (
    <div>
      <div className="bg-light my-5 py-5 px-5">
        <div className="row d-flex">
          <div className="container col-lg-4 text-lg-left order-sm-2 order-md-2 order-lg-1">
            <h2
              className="text-dark font-weight-bolder mt-md-5 mt-sm-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              About me
            </h2>
            <h5
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              I'm a Frontend Developer and a UI designer based in Lagos State,
              Nigeria.
            </h5>
            <small>
              <p
                className="text-muted text-lg-left mt-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                I love solving complex problems that gives me more idea turning
                it to something beautiful and eye catching which also gives me
                the innovation to work with pixels as a great tool of beauty.
                When I'm not coding, I love playing football or video games.
              </p>
            </small>
            {/* <code>I use this for practice</code> */}
          </div>

          <div
            className="col-lg-6 text-center order-sm-1 order-md-1 order-lg-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={about} className="img-fluid" alt="about-img" />
          </div>
        </div>
      </div>

      {/* Bootstrap Icon Arrow */}

      <div className="container d-flex justify-content-center text-center text-white">
        <FaArrowDown className="blink-btn" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="shadow py-5 px-5">
              <h3
                className="text-center font-weight-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Front-end Developer
              </h3>
              <p
                className="text-center mt-3"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>

              <h4
                className="text-primary mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Languages I Speak:
              </h4>
              <p data-aos="fade-right" data-aos-duration="1000">
                {' '}
                HTML, JavaScript, Bootstrap, CSS, React Js{' '}
              </p>

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
          </div>

          {/* Design Aspect */}

          <div
            className="col-lg-6"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="shadow py-5 px-5">
              <h3
                className="text-center font-weight-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Designer
              </h3>
              <p
                className="text-center mt-3"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>

              <h4
                className="text-primary mt-5"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Things I enjoy designing:
              </h4>
              <p data-aos="fade-up" data-aos-duration="1000">
                {' '}
                UI, Web, Mobile, Apps, Logos{' '}
              </p>

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
      </div>
    </div>
  );
}

export default About;
