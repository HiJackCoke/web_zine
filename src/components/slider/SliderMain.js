import React from "react";
import SwiperCore, {EffectFade, Navigation, Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Container } from "react-bootstrap";

import img from '../../assets/images/main.png'
import img2 from '../../assets/images/main2.png'

import Main from '../data/sliderImages/Main.json'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

// <div
// className="hero-slider-six__slide"
// style={{backgroundImage: `url(${img2})`}}
// key={i}
//     >

const SliderMain = () => {

    return (
        <div className="main-slider space-mb--r100">
            <Container>
                <div className="main-slider__wrapper">
                    <Swiper
                        watchSlidesVisibility
                        loop
                        spaceBetween={260}
                        effect="fade"
                        autoplay
                        pagination
                    >
                        {Main &&
                        Main.map((main) => {
                            return (
                                <SwiperSlide
                                    key={main.id}
                                >
                                    <div
                                        className="main-slider__slide swiper-slide"
                                    >
                                        <div className="slider-image">
                                            <img
                                                src={main.images}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};




export default SliderMain
