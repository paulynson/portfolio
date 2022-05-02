import React from 'react';
import about from '../assets/images/about.png';
import { FaArrowDown } from 'react-icons/fa';

function About() {
  const devTools = [
    {
      id: 1,
      list: 'VScode',
    },
    {
      id: 2,
      list: 'Google Chrome Inspect Tools',
    },
    {
      id: 3,
      list: 'GitHub',
    },
    {
      id: 4,
      list: 'Netlify',
    },
    {
      id: 5,
      list: 'CodePen',
    },
    {
      id: 6,
      list: 'CodeSandBox',
    },
    ];
    
    const desTools = [
        {
          id: 1,
          list: 'Figma',
        },
        {
          id: 2,
          list: 'Adobe XD',
        },
        {
          id: 3,
          list: 'Adobe Photoshop',
        },
        {
          id: 4,
          list: 'CorelDraw',
        },
        {
          id: 5,
          list: 'VideoScribe',
        },
        
      ];
  return (
    <div>
      <section>
        <div className="bg-light my-5 py-5 px-5 gap">
          <div className="row d-flex">
            <div className="container col-lg-4 text-lg-left order-sm-2 order-md-2 order-lg-1">
              <h2
                className="text-dark font-weight-bolder mt-md-5 mt-sm-5 h2"
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
                  I love solving complex problems that gives me more idea
                  turning it to something beautiful and eye catching which also
                  gives me the innovation to work with pixels as a great tool of
                  beauty. When I'm not coding, I love playing football or video
                  games.
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
          <div className="row d-flex justify-center justify-content-center">
            <div
              className="col-lg-5"
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
                {devTools.map(devs => (
                       <li className="list-group-item">{devs.list}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Design Aspect */}

            <div
              className="col-lg-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="shadow py-5 px-5">
                <h3
                  className="text-center font-weight-bold"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  UI Designer
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
                                  {desTools.map(designs => (
                       <li className="list-group-item">{designs.list}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-5 h-50" id="portfolio"></div>
      </section>
    </div>
  );
}

export default About;
