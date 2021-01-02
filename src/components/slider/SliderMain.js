import React from "react";
import SwiperCore, {EffectFade, Navigation, Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import img from '../../assets/images/Main/main1.png'
import img2 from '../../assets/images/Main/main2.jpg'


SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

const SliderMain = ({spaceBottomClass}) => {

    const Main = [
        {
            "id": "1",
            "images": img,
        },
        {
            "id": "2",
            "images": img2,
            "title": "2021년, 전쟁기념관이 새롭게 비상합니다",
            "desc": "변화와 혁신을 통해\n" +
                "새로운 패러다임을 선도하고, 전쟁과 군사를 주제로 한 복합문화플랫폼 사업에 착수하며, " +
                "22개 유엔참전국과 함께하는 문화축제를 개최합니다.\n" +
                "여러분도 전쟁기념관과 함께 희망찬 2021년을 시작합시다!"
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
                        autoplay
                        pagination
                        grabCursor={true}
                    >
                        {Main && Main.map((main, i) => {
                            return (
                                <SwiperSlide>
                                    <div
                                        className="main-slider__slide bg-img"
                                        style={{ backgroundImage: `url(${main.images})`}}
                                        key={i}
                                    >
                                        <Container className="h-100">
                                            <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                                                <Col lg={6} className="order-2 order-lg-1">
                                                    <div className="main-slider__content">

                                                        <h1
                                                            className="title"
                                                        >
                                                            {main.title}
                                                        </h1>
                                                        <h5 className="sub-title">{main.desc}</h5>
                                                        <div className="slider-link">
                                                            {/*<Link*/}
                                                            {/*    href={single.url}*/}
                                                            {/*    as={process.env.PUBLIC_URL + single.url}*/}
                                                            {/*>*/}
                                                            {/*    <a className="lezada-button lezada-button--medium">*/}
                                                            {/*        shop now*/}
                                                            {/*    </a>*/}
                                                            {/*</Link>*/}
                                                        </div>
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

    //     <div className="main-slider space-mb--r100">
    //         <Container>
    //             <div className="main-slider__wrapper">
    //                 <Swiper
    //                     watchSlidesVisibility
    //                     loop
    //                     spaceBetween={260}
    //                     effect="fade"
    //                     autoplay
    //                     pagination
    //                 >
    //                     {Main &&
    //                     Main.map((main) => {
    //                         return (
    //                             <SwiperSlide
    //                                 key={main.id}
    //                             >
    //                                 <div
    //                                     className="main-slider__slide swiper-slide"
    //
    //                                 >
    //                                     <div className="slider-image"
    //                                          style={{ backgroundImage: `url(${main.images})`, backgroundSize: "cover"}}
    //                                     >
    //                                         <img
    //                                             src={main.images}
    //                                             className="img-fluid"
    //                                             alt=""
    //                                         />
    //                                     </div>
    //                                 </div>
    //                             </SwiperSlide>
    //                         );
    //                     })}
    //                 </Swiper>
    //             </div>
    //         </Container>
    //     </div>
    //
    //



    );
};




export default SliderMain
