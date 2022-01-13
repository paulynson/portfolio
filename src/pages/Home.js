import React from 'react';
import { Link } from 'react-router-dom';
import about from '../assets/images/about.png';
import { FaArrowDown } from 'react-icons/fa';

function Home() {
  const workDetails = [
    {
      id: 1,
      link: 'http://mobiletoiletsystems.com.ng',
      pix: '/static/media/wk2.d5b7ea9a.PNG',
      work: 'Mobile Toilet Systems',
      tools: 'WORDPRESS',
      info: 'Mobile Toilet Website',
    },

    {
      id: 2,
      link: 'https://barber-shop-envato.netlify.app',
      pix: '/static/media/wk3.7664d484.PNG',
      work: 'Barber Shop Website',
      tools: 'HTML5, CSS3, BOOTSTRAP',
      info: 'Barber-shop website',
    },

    {
      id: 3,
      link: 'https://platinumhotels.netlify.app',
      pix: '/static/media/wk5.a2b8e4c6.PNG',
      work: 'Platinum Hotel Website',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Platinum Hotel',
    },

    {
      id: 4,
      link: 'https://doggy-villa.netlify.app/',
      pix: '/static/media/wk6.e3e993ff.png',
      work: 'Dogg-Villa Care',
      tools: 'HTML5, CSS3, JAVASCRIPT',
      info: 'Dog Care Website',
    },

    {
      id: 5,
      link: 'https://mobilescreen.netlify.app',
      pix: '/static/media/wk4.82bfaec1.PNG',
      work: 'Mobile Viewport Design',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Mobile viewport',
    },

    {
      id: 6,
      link: 'http://leisure-lawn.com',
      pix: '/static/media/wk1.17a18401.PNG ',
      work: 'Leisure Lawn Business Website',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Leisure-Lawn Website',
    },
  ];
  return (
    <div>
      <div className="jumbotron heroImage shadow">
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
              {/* <Link to="/portfolio" className=" btn btn-dark">
                {' '}
                Portfolio{' '}
              </Link> */}
              <a href="#portfolio" className=" btn btn-dark">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* About Section */}

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
                  I'm a Frontend Developer and a UI designer based in Lagos
                  State, Nigeria.
                </h5>
                <small>
                  <p
                    className="text-muted text-lg-left mt-4"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    I love solving complex problems that gives me more idea
                    turning it to something beautiful and eye catching which
                    also gives me the innovation to work with pixels as a great
                    tool of beauty. When I'm not coding, I love playing football
                    or video games.
                  </p>
                </small>
                {/* <code>I use this for practice</code> */}
              </div>

              <div
                className="col-lg-6 text-center order-sm-1 order-md-1 order-lg-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={about}
                  className="img-fluid w-75 rounded-circle border border-light"
                  alt="about-img"
                />
              </div>
            </div>
          </div>

          {/* Bootstrap Icon Arrow */}

          <div className="container d-flex justify-content-center text-center text-white">
            <FaArrowDown className="blink-btn" />
          </div>

          <div className="container my-5">
            <div className="row">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
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
                    I like to code things from scratch, and enjoy bringing ideas
                    to life in the browser.
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
                    HTML5, Bootstrap, Tailwind, CSS3, SASS, JavaScript, React Js{' '}
                  </p>

                  <h4 className="text-primary mt-5">Dev Tools:</h4>
                  <ul className="list-group">
                    <li className="list-group-item">VScode</li>
                    <li className="list-group-item">
                      Google Chrome Inspect Tools
                    </li>
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
                    UI, Web, Mobile, Logos{' '}
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
          <div className="text-center my-5 h-50" id="portfolio"></div>
        </div>

        {/* About Section */}

        {/* Portfolio */}
<hr />
        <div className="my-5">
          <h2 className="h2 mt-5">
            {' '}
            Interested in collaborating or investing?
          </h2>

          <h6
            className="my-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            I’m always open to discussing Web Development, Product Design, work
            or partnership opportunities.
          </h6>
          <Link
            className="nav-link my-2"
            to="/contact"
            className="btn btn-outline-dark"
          >
            Start a Conversation
          </Link>
        </div>
<hr />
        {/* mapping work done */}
        <div className='my-5'>
          <h2 className="h2 mt-5">PORTFOLIO</h2>

          <h6
            className="font-weight-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            SOME OF MY WORK
          </h6>
          <hr />

          <div className="row container gap my-4">
            {workDetails.map((working) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div key={working.id} className="shadow">
                  <a
                    href={working.link}
                    target="_blank"
                    rel="noreferrer"
                    className="linkme"
                  >
                    {' '}
                    <img
                      src={working.pix}
                      className="img-fluid"
                      alt={working.info}
                    />{' '}
                    <div className="card-body">
                      <p className="text-lg-left card-title text-dark">
                        {working.work}
                      </p>

                      <p className="text-lg-left text-muted card-text">
                        <small className="mid">{working.tools}</small>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mapping work done */}
      </div>
    </div>
  );
}

export default Home;
