import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  const date = new Date();
const tDate = date.getFullYear();

  return (
    <div>
      <footer class="footer mt-auto py-3 navbar-dark bg-darken">
        <div class="container text-white">
          <span class="text-muted">&copy; {tDate} Paul Abakada</span>
        </div>

        <div className="mt-3 d-flex justify-content-center text-white">
          <a
            href="https://www.facebook.com/Abakadapaul/"
            target="-blank"
            rel="noreferrer"
            className="text-white px-3"
          >
            {' '}
            <FaFacebook className='icon-link' />{' '}
          </a>
          <a
            href="https://twitter.com/Abakadapaul/"
            target="-blank"
            rel="noreferrer"
            className="text-white px-3"
          >
            {' '}
            <FaTwitter className='icon-link' />{' '}
          </a>
          <a
            href="https://instagram.com/Abakadapaul/"
            target="-blank"
            rel="noreferrer"
            className="text-white px-3"
          >
            {' '}
            <FaInstagram className='icon-link' />{' '}
          </a>
          <a
            href="https://github.com/paulynson"
            target="-blank"
            rel="noreferrer"
            className="text-white px-3"
          >
            {' '}
            <FaGithub className='icon-link' />{' '}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

