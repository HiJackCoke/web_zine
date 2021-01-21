import React from "react";
import SwiperCore, {EffectFade, Navigation, Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Container, Row, Col } from "react-bootstrap";

import img from '../../assets/images/Main/main.jpg'
import img2 from '../../assets/images/Main/main2.jpg'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

const SliderMain = ({spaceBottomClass}) => {

    const title = [
        (
            <span
                style={{
                    borderBottom: "2px solid",
                    fontWeight: "bold",
                    fontSize: "22px",
                }}
            >
                {/*MONTHLY STORY*/}
            </span>
        ),
        (
            <span
                style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                }}
            >
                2021년, 전쟁기념관이 <br/> 새롭게 비상합니다
            </span>
        )
    ]

    const desc = [
        (
            <div style={{fontSize: "26px"}}>
                {/*병자호란의 치욕이 주는 <br/>*/}
                {/*<div style={{fontWeight: "bold", fontSize: "30px"}}>*/}
                {/*    역사적 교훈*/}
                {/*</div>*/}
            </div>
        ),
        (
            // <div style={{ color:"white", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            //     변화와 혁신을 통해 새로운 패러다임을 선도하고,
            //     <br/>전쟁과 군사를 주제로 한 복합문화플랫폼 사업에 착수하며,
            //     <br/>22개 유엔참전국과 함께하는 문화축제를 개최합니다.
            //     <br/>여러분도 전쟁기념관과 함께 희망찬 2021년을 시작합시다!
            // </div>
            <div style={{ color:"darkorange"}}>
                변화와 혁신을 통해 새로운 패러다임을 선도하고,
                <br/>전쟁과 군사를 주제로 한 복합문화플랫폼 사업에 착수하며,
                <br/>22개 유엔참전국과 함께하는 문화축제를 개최합니다.
                <br/>여러분도 전쟁기념관과 함께 희망찬 2021년을 시작합시다!
            </div>
        )

    ]
    const Main = [
        {
            "id": "1",
            "images": img,
            "title": title[0],
            "desc": desc[0]
        },
        {
            "id": "2",
            "images": img2,
            "title": title[1],
            "desc": desc[1]
        }
    ]



    return (
        <div
            className={`main-slider ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container>
                <div className="main-slider__wrapper">
                    <Swiper
                        watchSlidesVisibility
                        loop
                        spaceBetween={260}
                        effect="fade"
                        autoplay={{
                            delay: 10000
                        }}
                        pagination
                        grabCursor={true}
                    >
                        {Main && Main.map((main, i) => {
                            return (
                                <SwiperSlide>

                                    <div
                                        className={`main-slider__slide bg-img ${main.desc ? "" : ""}`}
                                        style={{ backgroundImage: `url(${main.images})`}}
                                        key={i}
                                    >
                                        <Container className="full h-100" style={{display: "grid"}}>
                                            <Row className="align-items-center flex-column flex-lg-row justify-content-center">
                                            {/*<Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">*/}
                                                <Col lg={6} className="order-2 order-lg-1">
                                                    <div className="main-slider__content">
                                                        <div
                                                            className="title text-black font-weight-bold"
                                                        >
                                                            {main.title}
                                                        </div>
                                                        {/*<div className="sub-title text-black">{main.desc}</div>*/}
                                                        {/*<div className="slider-link">*/}
                                                            {/*<Link*/}
                                                            {/*    href={single.url}*/}
                                                            {/*    as={process.env.PUBLIC_URL + single.url}*/}
                                                            {/*>*/}
                                                            {/*    <a className="lezada-button lezada-button--medium">*/}
                                                            {/*        shop now*/}
                                                            {/*    </a>*/}
                                                            {/*</Link>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>

                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </Container>
        </div>
    );
};




export default SliderMain
