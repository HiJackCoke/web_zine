import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import Event from '../../data/sliderData/Event.json'

SwiperCore.use([Navigation])


const EventSlide = ({ spaceBottomClass }) => {

    return (
        <div
            className={`slider-five ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={12}>
                        <div className="sub-slider-container">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                            >
                                {Event &&
                                Event.map((slide, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="sub-grid-post">
                                                <div className="sub-grid-post__image space-mb--30">
                                                    <Link
                                                        to="/"
                                                    >
                                                        <img
                                                            src={slide.images}
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
                                                    <Link to="/">


                                                        <h2 className="post-title">
                                                            <Link
                                                                to="/"
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

export default EventSlide;
