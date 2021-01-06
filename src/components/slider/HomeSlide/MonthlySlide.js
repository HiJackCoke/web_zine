import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import img from "../../../assets/images/Monthly/monthly1.jpg";
import img2 from "../../../assets/images/Monthly/monthly2.jpg";

SwiperCore.use([Navigation])


const MonthlySlide = ({ spaceBottomClass }) => {

    const Monthly = [
        {
            "id": "1",
            "images": img,
            "title": "신년사",
            "desc": "새로운 패러다임을 선도하고 변화와 혁신을 구현하는 전쟁기념관"
        },
        {
            "id": "2",
            "images": img2,
            "title": "story",
            "desc": "병자호란의 치욕이 주는 역사적 교훈\n"
        }
    ]

    return (
        <div
            className={`${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={3}>
                        <div className="sub-intro space-mb-mobile-only--30">
                            <h2 className="title-name" >MONTHLY STORY</h2>
                            {/*<p>*/}
                            {/*    전쟁, 그리고... / 문화속 전쟁*/}
                            {/*</p>*/}
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="sub-slider-container">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
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
                                {Monthly &&
                                Monthly.map((slide, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="sub-grid-post">
                                                <Link to={`/monthly/${slide.id}`}>
                                                    <div className="sub-grid-post__bg space-mb--30 bg-img"
                                                         style={{ backgroundImage: `url(${slide.images})`}}
                                                    >
                                                    </div>
                                                    <div className="sub-caption">
                                                        <h2 className="name">{slide.title}</h2>
                                                        <span className="subtext">{slide.desc}</span>
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

export default MonthlySlide;
