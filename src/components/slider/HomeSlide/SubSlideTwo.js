import React from 'react';
import {Link} from "react-router-dom";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import { Container, Row, Col } from "react-bootstrap";

import img5 from "../../../assets/images/Sub/sub5.png";
import img6 from "../../../assets/images/Sub/sub6.png";
import img7 from "../../../assets/images/Sub/sub7.png";
import img8 from "../../../assets/images/Sub/sub8.1.png";



SwiperCore.use([Navigation])


const SubSlide = ({ spaceBottomClass }) => {

    const Sub = [
        {
            "id": "5",
            "images": img5,
            "title": "전시실에서 만나는 병자호란",
            "desc": "\n" +
                "임진왜란을 경험하면서 조선의 국방 정책도 큰 변화가 이루어졌다. 기존 제승방략 체계의 단점을 절감한 조선은 " +
                "평양성전투와 같은 명군과의 연합작전을 통해 일본과의 전투 경험이 풍부한 명군의 남병 전술을 도입하였다. " +
                "대부분 보병으로 구성되어 있었던 당시 명군은 조총과 호준포 등 가벼운 화기를 중심으로 무장하였다.\n" +
                "일본군에 대응하는 명군의 전술을 본 조선은 그 전술과 운용방식을 도입하여 군사제도를 재편하였다."
        },
        {
            "id": "6",
            "images": img6,
            "title": "온라인 콘텐츠로 가까워지는 특별전",
            "desc": "‘오래 보아야 예쁘다. 너도 그렇다.’ 우리에게 널리 알려진 이 글귀는 온라인 전시에서는 이렇게 불려야 할 것\n" +
                "같다. ‘자주 보아야 예쁘다. 너도 그렇다.’ 코로나19는 우리의 삶뿐만 아니라 심미(審"
        },
        {
            "id": "7",
            "images": img7,
            "title": "대한민국 소총 연대기 - M1 소총부터 K2C1 자동소총까지",
            "desc": "소총은 군인 개개인이 적을 상대하여 자신을 지키고 승리를 거두는 데 필요한 가장 기본적인 무기이다. 군사기술이 크게 발달하여 수백 킬로미터 떨어진\n" +
                "곳에 있는 적을 타격할 수 있는 세상에서도 결국 ‘적진에 깃발을 꽂아야’ 하는 군인이 찾게 되는 것은 역시 그의 손에 쥐어진 소총 한 자루이다." +
                " 이번 글에서는 기념관의 국군무기발전실에서 살펴볼 수 있는, 1948년 대한민국 정부수립 이래 우리 군의 손을 거쳐 간 소총들의 이야기를 간략히 소개하고자 한다.\n"
        },
        {
            "id": "8",
            "images": img8,
            "title": "뉴스 브리핑",
            "desc": "헬기 동산 개막식 개최 / 전쟁기념관 가족친화 우수기관 획득 / 온라인 전시해설 콘텐츠 ‘죽음도 갈라놓지 못한 사랑’"
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
                                                    <div className="sub-grid-post__bg space-mb--30 bg-img"
                                                         style={{ backgroundImage: `url(${slide.images})`}}
                                                    >
                                                    </div>
                                                    <div className="sub-grid-post__content">
                                                        <h2 className="post-title">
                                                            {slide.title}
                                                        </h2>
                                                        <p className="post-excerpt">
                                                            {slide.desc}
                                                        </p>
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

export default SubSlide;
