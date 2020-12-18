import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import Monthly from '../../data/sliderData/Monthly.json'
import img from "../../../assets/images/one2.jpg";
import img2 from "../../../assets/images/one4.jpg"

SwiperCore.use([Navigation])


const MonthlySlide = ({ spaceBottomClass }) => {

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
                            {/*<Link*/}
                            {/*    to="/monthly"*/}
                            {/*    className="twm-button twm-button--medium"*/}
                            {/*>*/}
                            {/*    view all*/}
                            {/*</Link>*/}
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="sub-slider-container">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                            >
                                {Monthly &&
                                Monthly.map((slide, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="sub-grid-post" >
                                                <div className="sub-grid-post__image space-mb--30">
                                                    <Link
                                                        to={`/monthly/${slide.id}`}
                                                    >
                                                        <img
                                                            src={slide.images[0]}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        {slide.images.length > 1 ? (
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
                                                    <Link to="/monthly">
                                                        <h2 className="post-title">
                                                            <Link
                                                                to="/monthly"
                                                            >
                                                                {slide.title}
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

export default MonthlySlide;
