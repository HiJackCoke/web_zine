import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {Tooltip} from 'react-tippy';
import { IoIosArrowRoundUp } from "react-icons/io";
import {animateScroll} from 'react-scroll';

import img from '../../assets/images/logo-gray.png';

const Footer = () => {

    const [scroll, setScroll] = useState(0)
    const [top, setTop] = useState(0)

    useEffect(() => {
        setTop(100);
        window.addEventListener("scroll", handScroll)
        return () => {
            window.removeEventListener("scroll", handScroll)
        }
    }, [])

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    const handScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <footer
            className="space-pt--50 space-pb--50"
            style={{backgroundColor: "#D0BEE6"}}
        >
            <Container>
                <Row>
                    <Col lg={9} md={12}>

                        {/*=======  copyright text  =======*/}
                        <div className="footer-copyright-text d-flex">
                            {/*&copy; {new Date().getFullYear() + "The War Memorial of Korea All rights reserved."}*/}
                            <Col lg={3}>
                                <img src={img} alt="/" className="img-fluid"/>
                            </Col>


                            <Col lg={9}>
                                <div className="footer-postal">
                                    우 04353 서울특별시 용산구 이태원로 29(용산동 1가 8번지) / Tel : 02-709-3114 / Fax 02-709-3100
                                    <br/> © 2018 The War Memorial of Korea All rights reserved.
                                </div>
                            </Col>

                        </div>
                    </Col>
                    <Col lg={3} md={12} className="text-right text-lg-right">
                        {/*=======  social icons  =======*/}
                        <div
                            className="footer-social-icons space-mb--20">
                            <ul>
                                <li>
                                    <Tooltip
                                        title="Facebook"
                                        position="top"
                                        trigger="mouseenter"
                                        animation="shift"
                                        arrow={true}
                                        duration={200}
                                    >
                                        <a
                                            href="https://www.facebook.com/warmemo.korea"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip
                                        title="Instagram"
                                        position="top"
                                        trigger="mouseenter"
                                        animation="shift"
                                        arrow={true}
                                        duration={200}
                                    >
                                        <a
                                            href="https://www.instagram.com/warmemorialofkorea/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip
                                        title="Youtube"
                                        position="top"
                                        trigger="mouseenter"
                                        animation="shift"
                                        arrow={true}
                                        duration={200}
                                    >
                                        <a
                                            href="https://www.youtube.com/channel/UClEbJ_3EMk26pJ3Qun7QRMw?view_as=subscriber"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaYoutube />
                                        </a>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
            <button
                className={`scroll-top ${scroll > top ? "show" : ""}`}
                onClick={() => scrollToTop()}
            >
                <IoIosArrowRoundUp />
            </button>
        </footer>
    );
};

export default Footer;
