import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {Tooltip} from 'react-tippy';
import {animateScroll} from 'react-scroll';

import img from '../../assets/images/logo-gray.png';
import arrow from '../../assets/images/arrow.png'

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
                    <Col lg={9} md={9}>

                        {/*=======  copyright text  =======*/}
                        <div className="footer-copyright-text d-flex">
                            {/*&copy; {new Date().getFullYear() + "The War Memorial of Korea All rights reserved."}*/}
                            <Row>
                                <Col lg={3} md={3} xs={12}>
                                    <img src={img} alt="/" className="img-fluid"/>
                                </Col>


                                <Col lg={9} md={9} xs={12}>
                                    <div className="footer-postal">
                                        발행일 2021년 1월 5일 통권 제180호
                                        발행처 전쟁기념관 발행인 전쟁기념관장 이상철
                                        <br/>주소 (04353)서울시 용산구 이태원로29
                                        기획·편집 학예부(082ran@daum.net) <br/>전화 02-709-3226
                                        제작 총괄 (주)한강문화(02-511-9369) <br/>
                                        {"*<전쟁기념관>"}에 게재된 집필진의 글은 전쟁기념관의 공식 입장과 다를 수 있습니다.
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col lg={3} md={3} className="text-right text-lg-right">
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
            <div >
                <button
                    className={`scroll-top ${scroll > top ? "show" : ""}`}
                    onClick={() => scrollToTop()}
                >
                    <img src={arrow}
                        className="img-fluid"
                         alt="/"
                    />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
