import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import vol180 from '../../../assets/images/last/180.png'


const LastSlide = ({spaceBottomClass}) => {

    const Last = [
        {
            "id": "1",
            "images": vol180,
            "title": "1"
        },
        {
            "id": "2",
            "images": "",
            "title": "2"
        },
        {
            "id": "3",
            "images": "",
            "title": "3"
        },
        {
            "id": "4",
            "images": "",
            "title": "4"
        },
        {
            "id": "5",
            "images": "",
            "title": "5"
        }
    ]

    return (
        <div
            className={`${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>

                <Row className="">
                    <Col lg={12}>
                            <div className="sub-slider-container">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    centeredSlides
                                    loop
                                    navigation
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        320: {
                                            slidesPerView: 2
                                        }
                                    }}
                                >
                                    {Last &&
                                    Last.map((slide, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="sub-grid-post text-center">
                                                    <Link to={`/sub/${slide.id}`}>
                                                        <div className="sub-grid-post__bg bg-img"
                                                             style={{ backgroundImage: `url(${vol180})`}}
                                                        >
                                                        </div>
                                                        <div className="sub-caption">
                                                            <h2 className="name">{slide.title}</h2>
                                                        </div>
                                                    </Link>
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

export default LastSlide;
