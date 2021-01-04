import React from 'react'
import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoYoutube,
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
        <a
            href="https://www.facebook.com/warmemo.korea"
            target="_blank"
            rel="noreferrer"
        >
          <IoLogoFacebook />
        </a>
        <a
            href="https://www.instagram.com/warmemorialofkorea/"
            target="_blank"
            rel="noreferrer"
        >
          <IoLogoInstagram/>
        </a>
        <a
            href="https://www.youtube.com/channel/UClEbJ_3EMk26pJ3Qun7QRMw?view_as=subscriber"
            target="_blank"
            rel="noreferrer"
        >
          <IoLogoYoutube/>
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
