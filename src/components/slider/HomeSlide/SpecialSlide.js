import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import img1 from '../../../assets/images/Spe/spe1.png';
import img2 from '../../../assets/images/Spe/spe2.png';
import img3 from "../../../assets/images/Spe/spe3.png";


SwiperCore.use([Navigation])


const SubSlideTwo = ({ spaceBottomClass }) => {

    const Spec = [
        {
            "id": "1",
            "images": img3,
            "title": "뉴스 브리핑",
            "desc": "헬기 동산 개막식 개최 / 전쟁기념관 가족친화 우수기관 획득 / 온라인 전시해설 콘텐츠 ‘죽음도 갈라놓지 못한 사랑’"
        },
        {
            "id": "2",
            "images": img1,
            "title": "기념관 이슈",
            "desc": "호국인물총서 2 『유방백세, 어둠 속에서도 눈감지 않은 사람들』 발간"
        },
        {
            "id": "3",
            "images": img2,
            "title": "2021년 이달 호국인물 선정",
            "desc": ""
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
                            <h2>기념관이슈</h2>
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
                                {Spec &&
                                Spec.map((slide, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="sub-grid-post">
                                                <Link to={`/sub/${slide.id}`}>
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

        // <div
        //     className={`slider-one ${spaceBottomClass ? spaceBottomClass : ""}`}
        // >
        //     <Container>
        //         <Row className="align-items-center">
        //             <Col lg={3}>
        //                 <div className="sub-intro space-mb-mobile-only--30">
        //                     <h2>기념관이슈</h2>
        //                 </div>
        //             </Col>
        //             <Col lg={9}>
        //                 <div className="sub-slider-container">
        //                     <Swiper
        //                         slidesPerView={2}
        //                         spaceBetween={30}
        //                     >
        //                         {Spec &&
        //                         Spec.map((slide, i) => {
        //                             return (
        //                                 <SwiperSlide key={i}>
        //                                     <div className="sub-grid-post">
        //                                         <Link to={`/monthly/${slide.id}`}>
        //                                             <div className="sub-grid-post__monthly-bg space-mb--30 bg-img"
        //                                                  style={{ backgroundImage: `url(${slide.images})`}}
        //                                             >
        //                                             </div>
        //                                             <div className="sub-caption">
        //                                                 <h2 className="name">{slide.title}</h2>
        //                                                 <span className="subtext">{slide.desc}</span>
        //                                             </div>
        //                                         </Link>
        //                                     </div>
        //                                 </SwiperSlide>
        //                             );
        //                         })}
        //                     </Swiper>
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    );
};

export default SubSlideTwo;



// import React from 'react';
// import {Link} from "react-router-dom";
// import SwiperCore, {Navigation} from 'swiper';
// import {Swiper, SwiperSlide} from "swiper/react";
//
// import { Container, Row, Col } from "react-bootstrap";
//
// import Special from '../../data/sliderData/Special.json'
//
// SwiperCore.use([Navigation])
//
//
// const SpecialSlide = ({ spaceBottomClass }) => {
//
//     return (
//         <div
//             className={`slider-four ${spaceBottomClass ? spaceBottomClass : ""}`}
//         >
//             <Container>
//                 <Row className="align-items-center">
//                     <Col lg={3}>
//                         <div className="sub-intro space-mb-mobile-only--30">
//                             <h2>특집</h2>
//                             <p>
//                                 박문관 탐방 / 뉴스 브리핑
//                             </p>
//                         </div>
//                     </Col>
//                     <Col lg={9}>
//                         <div className="sub-slider-container">
//                             <Swiper
//                                 slidesPerView={2}
//                                 spaceBetween={30}
//                             >
//                                 {Special &&
//                                 Special.map((slide, i) => {
//                                     return (
//                                         <SwiperSlide key={i}>
//                                             <div className="sub-grid-post">
//                                                 <div className="sub-grid-post__image space-mb--30">
//                                                     <Link
//                                                         to={`/special/${slide.id}`}
//                                                     >
//                                                         <img
//                                                             src={slide.images}
//                                                             className="img-fluid"
//                                                             alt=""
//                                                         />
//                                                         {slide.images.length > 1 ? (
//                                                             <img
//                                                                 className="img-fluid"
//                                                                 src=""
//                                                                 alt=""
//                                                             />
//                                                         ) : (
//                                                             ""
//                                                         )}
//
//                                                     </Link>
//                                                 </div>
//                                                 <div className="sub-grid-post__content">
//                                                     <Link to="/">
//                                                         <h2 className="post-title">
//                                                             <Link
//                                                                 to={`/special/${slide.id}`}
//                                                             >
//                                                                 {slide.title}
//                                                             </Link>
//                                                         </h2>
//                                                         <p className="post-excerpt">
//                                                             발췌: bloola bloola bloola bloola bloola bloola bloola bloola
//                                                             bloola bloola bloola bloola bloola
//                                                         </p>
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </SwiperSlide>
//                                     );
//                                 })}
//                             </Swiper>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };
//
// export default SpecialSlide;
