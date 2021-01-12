import React from 'react'
import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoIosPhonePortrait />
            <a href="tel://027093114">02-709-3114</a>
          </li>
          <li>
            <IoMdMail />
            <a href="webzine@warmemo.or.kr">webzine@warmemo.or.kr</a>
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
