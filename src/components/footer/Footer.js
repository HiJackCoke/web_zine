import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer
            className="space-pt--50 space-pb--50"
            style={{backgroundColor: "#D0BEE6"}}
        >
            <Container>
                <Row>
                    <Col lg={9} md={12}>

                        {/*=======  copyright text  =======*/}
                        <div
                            className="footer-copyright-text d-flex"
                            style={{justifyContent: "space-around"}}
                        >
                            {/*&copy; {new Date().getFullYear() + " "}*/}
                            <div style={{textAlign: "center"}}>
                                전쟁기념관 <br/> The War Memorial of Korea
                            </div>
                            <div style={{alignSelf: "center"}}>
                                04353 서울특별시 용산구 이태원로 29(용산동 1가 8번지) / Tel : 02-709-3114 / Fax 02-709-3100
                                <br/> © 2018 The War Memorial of Korea All rights reserved.
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12} className="text-left text-lg-right">
                        {/*=======  social icons  =======*/}
                        <div className="footer-social-icons space-mb--20">
                            <ul>
                                <li>
                                    <a href="/">
                                        <FaFacebookF />
                                    </a>

                                </li>
                                <li>
                                    <a href="/">
                                        <FaInstagram />
                                    </a>

                                </li>
                                <li>
                                    <a href="/">
                                        <FaYoutube />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
