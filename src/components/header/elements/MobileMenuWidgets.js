import React from 'react'
import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";

import {Link} from 'react-router-dom';

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoIosPhonePortrait />
            <a href="tel://12452456012">(1245) 123-1234 </a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
          </li>
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://www.twitter.com" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <IoLogoInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <IoLogoFacebook />
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
