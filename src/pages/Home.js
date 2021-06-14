import React from 'react';
import { Link } from 'react-router-dom';
import wk1 from '../assets/images/wk1.PNG';
import wk2 from '../assets/images/wk2.PNG';
import wk3 from '../assets/images/wk3.PNG';

function Home() {
  return (
    <div>
      <div className="jumbotron heroImage">
        <div className="design"></div>
        <div className="design_two"></div>

        {/* <!-- this div class is for the animations --> */}
        <div class="div"></div>
        <div class="div1"></div>
        <div class="div2"></div>
        {/* <!-- end of the div animation --> */}

        <div className="d-flex align-items-center">
          <div className="container text-center">
            <h1
              className="text-dark font-weight-bold p-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I'll make your Website Responsive and Beautiful
            </h1>
            <p
              className="text-dark text-lg-center mt-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              I Develop Websites & also Design (Graphics, Websites & UI Design)
            </p>

            <div className="mt-4" data-aos="fade-down" data-aos-duration="1000">
              <Link to="/portfolio" className=" btn btn-dark">
                {' '}
                Portfolio{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h6
          className="font-weight-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          SOME OF MY LATEST WORK
        </h6>
        <hr />

        <div className="card-deck container">
          {/* first row */}
          <div
            className="card shadow"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a
              href="https://barber-shop-envato.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <img
                src={wk3}
                className="img-fluid"
                alt="Barber-shop website"
              />{' '}
            </a>

            <div className="card-body">
              <p className="text-lg-left card-title">Creating Website</p>

              <p className="text-lg-left text-muted card-text">
                <small>Side Project</small>
              </p>
            </div>
          </div>

          {/* second row */}
          <div
            className="card shadow"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a href="http://leisure-lawn.com" target="_blank" rel="noreferrer">
              {' '}
              <img
                src={wk1}
                className="img-fluid"
                alt="leisure-lawn website"
              />{' '}
            </a>

            <div className="card-body">
              <p className="text-lg-left card-title">
                Creating Website for Leisure Lawn Business
              </p>

              <p className="text-lg-left text-muted card-text">
                <small>Website Design</small>
              </p>
            </div>
          </div>

          {/* Third row */}
          <div
            className="card shadow"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a
              href="http://mobiletoiletsystems.com.ng"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <img
                src={wk2}
                className="img-fluid"
                alt="mobile toilet systems"
              />{' '}
            </a>
            <div className="card-body">
              <p className="text-lg-left card-title">
                Creating a portable toilet system website
              </p>

              <p className="text-lg-left text-muted card-text">
                <small>Website Design with WordPress</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
