import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import {trimText} from '../../../utils'

import img from "../../../assets/images/Sub/sub1.png";
import img2 from "../../../assets/images/Sub/sub2.png";
import img3 from "../../../assets/images/Sub/sub3.jpg";
import img4 from "../../../assets/images/Sub/sub4.jpg";
import img5 from "../../../assets/images/Sub/sub5.jpg";
import img6 from "../../../assets/images/Sub/sub6.png";
import sub7 from '../../../assets/images/Sub/sub7.JPG'

SwiperCore.use([Navigation])


const SubSlide = ({ spaceBottomClass }) => {


    const Sub = [
        {
            "id": "1",
            "images": img,
            "title": "전쟁과 문화",
            "desc":"영화속에담긴병자호란 <남한산성>과<최종병기활>"
        },
        {
            "id": "2",
            "images": img2,
            "title": "기념관 이야기 1",
            "desc": "기억을 기록하는 아카이브"
        },
        {
            "id": "3",
            "images": img3,
            "title": "기념관 이야기 2",
            "desc": "이벤트와 디자인 워크숍으로 북적~ 어린이박물관 온라인에 모여라!"
        },
        {
            "id": "4",
            "images": img4,
            "title": "기념관 이야기 3",
            "desc": "온라인으로 찾아가는 2021 #전쟁기념관"
        },
        {
            "id": "5",
            "images": img5,
            "title": "역사의 순간",
            "desc": "전시실에서 만나는 병자호란"
        },
        {
            "id": "6",
            "images": img6,
            "title": "온박물관 탐방",
            "desc": "온라인 콘텐츠로 가까워지는 특별전"
        },
        {
            "id": "7",
            "images": sub7,
            "title": "흥미로운 무기 개발사",
            "desc": "대한민국 소총 연대기 - M1 소총부터 K2C1 자동소총까지"
        },
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
                                <h2>MEMORIAL STORY</h2>
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
                                    {Sub &&
                                    Sub.map((slide, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="sub-grid-post">
                                                    <Link to={`/sub/${slide.id}`}>
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

export default SubSlide;
