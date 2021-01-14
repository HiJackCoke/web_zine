import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import {trimText} from '../../../utils'

import img from "../../../assets/images/Monthly/page/news.jpg";
import img2 from "../../../assets/images/Monthly/page/story1.jpg";

SwiperCore.use([Navigation])


const MonthlySlide = ({ spaceBottomClass }) => {

    const desc = [
        (
            // 1
            <div>
                변화와 혁신을 구현하는 전쟁기념관
            </div>
        ),
        (
            // 2
            <div>
                병자호란의 치욕이 주는
                <br/>
                역사적 교훈
            </div>
        )
    ]

    const Monthly = [
        {
            "id": "1",
            "images": img,
            "title": "신년사",
            "desc": desc[0]
        },
        {
            "id": "2",
            "images": img2,
            "title": "Story",
            "desc": desc[1]
        }
    ]

    return (
        <div
            className={`${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}>
                    <Row className="align-items-center">
                        <Col lg={3}>
                            <div className="sub-intro space-mb-mobile-only--30">
                                <h2 className="title-name" >MONTHLY STORY</h2>
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
                                                        <div className="sub-grid-post__bg bg-img"
                                                             style={{ backgroundImage: `url(${slide.images})`}}
                                                        >
                                                        </div>
                                                        <div className="sub-caption">
                                                            <h2 className="name">{slide.title}</h2>
                                                            <span className="subtext">{trimText(slide.desc, 28)}</span>
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
                </div>

            </Container>
        </div>
    );
};

export default MonthlySlide;
