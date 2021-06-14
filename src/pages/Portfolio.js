import React from 'react';
import wk1 from '../assets/images/wk1.PNG';
import wk2 from '../assets/images/wk2.PNG';
import wk3 from '../assets/images/wk3.PNG';
import wk4 from '../assets/images/wk4.PNG';
import wk5 from '../assets/images/wk5.PNG';

function Portfolio() {
  return (
    <div>
      <div className="container my-5 p-5">
        <h5
          className="font-weight-bold my-5"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          MY LATEST WORK
        </h5>
        <hr />

        <div className="card-deck container mt-5">
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
                className="card-img-top"
                alt="Barber-shop website"
                sytle={{ width: '500px', height: '350px' }}
              />{' '}
            </a>

            <div className="card-body">
              <h6 className="text-lg-left">Creating Website</h6>

              <p className="text-lg-left text-muted">
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
                className="card-img-top"
                alt="leisure-lawn website"
              />{' '}
            </a>

            <div className="card-body">
              <h6 className="text-lg-left">
                Creating Website for Leisure Lawn Business
              </h6>

              <p className="text-lg-left text-muted">
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
                className="card-img-top"
                alt="mobile toilet systems"
              />{' '}
            </a>
            <div className="card-body">
              <h6 className="text-lg-left">
                Creating a portable toilet system website
              </h6>

              <p className="text-lg-left text-muted">
                <small>Website Design with WordPress</small>
              </p>
            </div>
          </div>

          {/* Forth row */}
          <div
            className="card shadow"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a
              href="https://mobilescreen.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <img
                src={wk4}
                className="card-img-top"
                alt="Little viewport"
              />{' '}
            </a>

            <div className="card-body">
              <h6 className="text-lg-left">Creating Website</h6>

              <p className="text-lg-left text-muted">
                <small>Side Project</small>
              </p>
            </div>
          </div>

          {/* Fifth row */}
          <div
            className="card shadow"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a
              href="https://platinumhotels.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <img
                src={wk5}
                className="card-img-top"
                alt="Platinum Hotel"
              />{' '}
            </a>

            <div className="card-body">
              <h6 className="text-lg-left">Creating a hotel Website</h6>

              <p className="text-lg-left text-muted">
                <small>Side Project</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
