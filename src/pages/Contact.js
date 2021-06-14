import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <div className=" py-5 my-5  text-center container">
        <div className="text-center">
          <h5
            className="my-5"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Thanks for taking the time to reach out. How can I help you today?
          </h5>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <div classname="col-lg-6 col-sm-12 col-md-12">
            <ul class="list-group list-group text-center align-items-center d-flex justify-content-center">
              <a
                href="mailto:paulabakada@gmail.com"
                className="list-group-item bg-dark text-light reachme my-3"
                data-aos="fade-up"
              >
                Write to Me
              </a>

              <a
                href="tel:08125157424"
                className="list-group-item bg-dark text-light reachme my-3"
                data-aos="fade-down"
              >
                Call Me
              </a>
            </ul>

            <h5
              className="mt-5 bg-warning px-4 py-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Social Media
            </h5>

            <div className="py-1 my-3" data-aos="fade-up">
              <a
                href="https://www.facebook.com/Abakadapaul/"
                target="-blank"
                rel="noreferrer"
                className="text-dark "
              >
                {' '}
                <FaFacebook /> Like me on Facebook{' '}
              </a>{' '}
            </div>
            <div className="py-1 my-3" data-aos="fade-down">
              <a
                href="https://twitter.com/Abakadapaul/"
                target="-blank"
                rel="noreferrer"
                className="text-dark "
              >
                {' '}
                <FaTwitter /> Follow me on Twitter{' '}
              </a>{' '}
            </div>
            <div className="py-1 my-3" data-aos="fade-up">
              <a
                href="https://www.instagram.com/Abakadapaul/"
                target="-blank"
                rel="noreferrer"
                className="text-dark"
              >
                {' '}
                <FaInstagram /> Follow me on Instagram{' '}
              </a>{' '}
            </div>
            <div className="py-1 my-3" data-aos="fade-down">
              <a
                href="https://github.com/paulynson"
                className="text-dark"
                target="-blank"
                rel="noreferrer"
              >
                {' '}
                <FaGithub /> Connect on GitHub{' '}
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
