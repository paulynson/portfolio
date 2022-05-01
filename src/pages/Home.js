import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

// import wk1 from "./images/wk1.PNG"

function Home() {
  const workDetails = [
    {
      id: 1,
      link: 'https://randomnumbersgame.netlify.app/',
      pix: require('./images/wk7.png').default,
      work: 'Guess Random Number Game',
      tools: 'HTML5, CSS3, JAVASCRIPT',
      info: 'Guess the Random Number Game',
    },
    {
      id: 2,
      link: 'https://moviehunts.vercel.app/',
      pix: require('./images/wk8.png').default,
      work: 'Movies App',
      tools: 'React Js, TailwindCSS',
      info: 'Movies App',
    },
   
    {
      id: 3,
      link: 'https://platinumhotels.netlify.app',
      pix: require('./images/wk3.PNG').default,
      work: 'Platinum Hotel Website',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Platinum Hotel',
    },

    {
      id: 4,
      link: 'https://doggy-villa.netlify.app/',
      pix: require('./images/wk4.png').default,
      work: 'Dogg-Villa Care',
      tools: 'HTML5, CSS3, JAVASCRIPT',
      info: 'Dog Care Website',
    },

    {
      id: 5,
      link: 'https://mobilescreen.netlify.app',
      pix: require('./images/wk5.PNG').default,
      work: 'Mobile Viewport Design',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Mobile viewport',
    },

    {
      id: 6,
      link: 'https://leisure-lawn.com',
      pix: require('./images/wk6.PNG').default,
      work: 'Leisure Lawn Business Website',
      tools: 'HTML5, CSS3, BOOTSTRAP, JAVASCRIPT',
      info: 'Leisure-Lawn Website',
    },
    {
      id: 7,
      link: 'https://mobiletoiletsystems.com.ng',
      pix: require('./images/wk1.PNG').default,
      work: 'Mobile Toilet Systems',
      tools: 'WORDPRESS',
      info: 'Mobile Toilet Website',
    },

    {
      id: 8,
      link: 'https://barber-shop-envato.netlify.app',
      pix: require('./images/wk2.PNG').default,
      work: 'Barber Shop Website',
      tools: 'HTML5, CSS3, BOOTSTRAP',
      info: 'Barber-shop website',
    },
 
  ];
  return (
    <div>
      <nav className="jumbotron heroImage shadow">
        <div className="design"></div>
        <div className="design_two"></div>

        {/* <!-- this div class is for the animations --> */}
        <div>

        <div class="div"></div>
        <div class="div1"></div>
        <div class="div2"></div>
        </div>
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
              className="text-dark text-lg-center mt-4 font-weight-bold" 
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
      </nav>

      <main className="container my-5">
        {/* About Section */}

        <About />

        {/* About Section */}

        {/* Portfolio */}
        <hr />
        <section className="my-5">
          <h2 className="h2 mt-5">
            {' '}
            Interested in collaborating or investing?
          </h2>

          <h6 className="my-3" data-aos="fade-up" data-aos-duration="1000">
            I'm always open to discussing Web Development, Product Design, work
            or partnership opportunities.
          </h6>
          <Link className="my-2 btn btn-outline-dark" to="/contact">
            Start a Conversation
          </Link>
        </section>
        <hr />
        {/* mapping work done */}
        <section className="my-5">
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
        </section>
        {/* mapping work done */}
      </main>
    </div>
  );
}

export default Home;
