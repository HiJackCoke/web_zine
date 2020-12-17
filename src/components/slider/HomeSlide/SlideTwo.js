import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import Two from '../../data/sliderImages/Two.json'
import img from '../../../assets/images/Two/Two1.jpg'
import img2 from '../../../assets/images/Two/Two2.jpg'
import img3 from '../../../assets/images/Two/Two3.jpg'
import img4 from '../../../assets/images/Two/Two4.jpg'

SwiperCore.use([Navigation])


const SlideTwo = ({ spaceBottomClass }) => {

    return (
        <div
            className={`slider-two ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={3}>
                        <div className="sub-intro space-mb-mobile-only--30">
                            <h2>INSIDE</h2>
                            <p>
                                전쟁, 그리고... / 문화속 전쟁
                            </p>
                            <Link
                                to="/"
                                className="twm-button twm-button--medium"
                            >
                                view all
                            </Link>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="sub-slider-container">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                            >
                                {Two &&
                                Two.map((two, i) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="sub-grid-post" key={i}>
                                                <div className="sub-grid-post__image space-mb--30">
                                                    <Link
                                                        to="/"
                                                    >
                                                        <img
                                                            src={two.images}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        {two.images.length > 1 ? (
                                                            <img
                                                                className="img-fluid"
                                                                src=""
                                                                alt=""
                                                            />
                                                        ) : (
                                                            ""
                                                        )}

                                                    </Link>
                                                </div>
                                                <div className="sub-grid-post__content">
                                                    <Link to="/">
                                                        <h2 className="post-title">
                                                            <Link
                                                                to="/"
                                                            >
                                                                {two.title}
                                                            </Link>
                                                        </h2>
                                                        <p className="post-excerpt">
                                                            발췌: bloola bloola bloola bloola bloola bloola bloola bloola
                                                            bloola bloola bloola bloola bloola
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SlideTwo;
