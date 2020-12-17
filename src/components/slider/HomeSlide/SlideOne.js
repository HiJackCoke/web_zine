import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import One from '../../data/sliderImages/One.json'
import img from "../../../assets/images/one2.jpg";
import img2 from "../../../assets/images/one4.jpg"

SwiperCore.use([Navigation])


const SlideOne = ({ spaceBottomClass }) => {

    return (
        <div
            className={`slider-one ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={3}>
                        <div className="sub-intro space-mb-mobile-only--30">
                            <h2>Monthly Story</h2>
                            <p>
                                평화의 뿌리를 튼튼하게 하는 것 살아남은 이들의 책임 / 6.25전쟁 참전용사들의 손녀, 캠벨 에이시아
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
                                slidesPerView={2}
                                spaceBetween={30}
                            >
                                {One &&
                                One.map((one, i) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="sub-grid-post" key={i}>
                                                <div className="sub-grid-post__image space-mb--30">
                                                    <Link
                                                        to="/"
                                                    >
                                                        <img
                                                            src={one.images[0]}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        {one.images.length > 1 ? (
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
                                                                {one.title}
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

export default SlideOne;
