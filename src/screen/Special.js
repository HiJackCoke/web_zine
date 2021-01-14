import React from 'react';
import Layout from "../components/layout/Layout";

import {Col, Container, Row} from "react-bootstrap";

import news from '../assets/images/Spe/special1.JPG'
import news2 from '../assets/images/Spe/special102.jpg'
import news3 from '../assets/images/Spe/special103.png'
import news4 from '../assets/images/Spe/special104.jpg'
import news5 from '../assets/images/Spe/special105.png'
import news6 from '../assets/images/Spe/special106.png';
// import news7 from '../assets/images/Spe/special107.png'

import tm from '../assets/images/Spe/special2.png';
import tm2 from '../assets/images/Spe/special202.jpg';
import tm3 from '../assets/images/Spe/special203.png';

import man from '../assets/images/Spe/special301.png'


const Special = ({match}) => {


    // const sub = [
    //     (
    //         <div>
    //             <div style={{color: "lightpink", fontWeight: "bold", marginTop: "10px"}}>
    //                 헬기 동산 개막식 개최
    //             </div>
    //         </div>
    //     )
    // ]

    const summ = [
        (
            <h5 className="summ" style={{fontFamily: "anemone", fontSize: "32px"}}>
                호국인물총서 2
                <br/>유방백세 <span style={{fontFamily: "nanum-square", borderBottom: "none"}}>(遺芳百世)</span> , 어둠 속에서도 눈감지 않은 사람들 발간
                <div className="writer">
                    <br/><br/> <span>글</span> 이재민_전쟁기념관 학예연구사
                </div>
            </h5>
        )
    ]

    const htext1 = [
        (
            <div style={{color: "lightpink"}}>
                ① 헬기 동산 개막식 개최
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ② 전쟁기념관 가족친화 우수기관 획득
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ③ 온라인 전시해설 콘텐츠 ‘죽음도 갈라놓지 못한 사랑’
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ④ 온라인 콘텐츠 {"<유물을 만나다>"}: 故 이건희 회장 기증 권총
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ⑤ 이동전시모듈 ‘6·25전쟁과 무공훈장-가슴에 단 <br/> 명예’ 순회전시
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ⑥ 소중한 유물을 기증해주셔서 <br/> 감사합니다(2020년 7~12월)
            </div>
        ),
        (
            <div style={{color: "lightpink"}}>
                ⑦ 전쟁·군사 도서 및 기록물 기증받습니다
            </div>
        ),
    ]


    const Specials = [
        {
            "id": "1",
            "title": "뉴/스/브/리/핑",
            "sub": "",
            "summary": "",
            "contents": [
                {
                    "id": "1",
                    "images": news,
                    "htext": htext1[0],
                    "btext": "2020년 11월 26일 어린이박물관 옥상에 헬기 동산이 새롭게 조성되어 조촐한 개막식 이 열렸다. " +
                        "이곳에는 6·25전쟁 당시 운용했던 기종부터 현대 국군이 사용했던 기종의 헬기들을 역동적인 형태로 전시하고 있는데," +
                        " 기존 헬기에 대한 고증과 복원작업을 통해 관람객들에게 다채로운 볼거리를 제공해줄 것으로 기대된다.\n"
                },
                {
                    "id": "2",
                    "images": news2,
                    "htext": htext1[1],
                    "btext": "전쟁기념관은 2021년 여성가족부가 인증하는 ‘가족친화 우수기관’에 선정됐다. 가족친화 인증제도는 직원들이 일과 가정을 양립할 수 있도록 " +
                        "지원하기 위해 가족친화 제도 를 모범적으로 운영하는 기업과 공공기관을 대상으로 인증하는 제도이다. " +
                        "인증 심사는 2020년 7~8월에 이루어진 서류심사와 현장 심사를 거쳐 진행됐으며, 전쟁기념관은 지난 2017년에 이어 2021년에도 선정되었다." +
                        " 앞으로도 전쟁기념관은 직원들이 일과 가정생활이 조화롭게 균형을 이룰 수 있도록 직원 복지에 최선을 다할 것이다."
                },
                {
                    "id": "3",
                    "images": news3,
                    "htext": htext1[2],
                    "btext": "15회 차 영상으로 제작된 ‘죽음도 갈라놓지 못한 사랑’ 전시해설 콘텐츠는 3층 유엔실 에 전시되어 있는 유엔군 묘지에 대한 이야기를 주제로, " +
                        "제목에서도 느낄 수 있듯이 애 절한 부부의 사연을 담고 있다. 6·25전쟁에 참전했다가 전사한 호주 군인 케네스 존 휴머스턴 대위와 간호장교였던 그의 부인 낸시의 " +
                        "감동적인 사연을 전시해설로 담아낸 영상은 전쟁기념관 홈페이지와 유튜브에서 만나볼 수 있다."
                },
                {
                    "id": "4",
                    "images": news4,
                    "htext": htext1[3],
                    "btext": "전쟁기념관 온라인 콘텐츠 <유물을 만나다> 제3탄은 故 이건희 회장 기증 권총 영상을 제작하여 좋 은 반응을 얻고 있다." +
                        " 이번 영상의 주인공은 미국 재향군인회가 6·25전쟁 참전 기념으로 당시 사용 된 M1911A1 권총 모델을 토대로 특별 제작한" +
                        " 5백 정의 권총 중 제2호정이다. 이는 1994년 워싱턴의 참전기념비 건립 모금에 참여한 故 이건희 회장에게 기증한 것을 이 회장이 서욱 국방장관에게 다시 " +
                        "기증하여 전쟁기념관으로 오게 됐다. 총 손잡이는 호두나무로 제작되었고, 일부 부속은 금장으로 만들어졌으며, 손잡이에는 태극마크," +
                        " 총신에는 6·25전쟁 발발 일자, 휴전 일자, “자유 세계를 위하여”라는 영문이 각인되어 있다." +
                        " 세계에서 가장 많이 사용되는 권총이지만 특별한 의미를 담아 한정판으로 제작된 M1911A1 권총의 스토리를 담고 있는 영상은 " +
                        "홈페이지와 유튜브에서 만날 수 있다."
                },
                {
                    "id": "5",
                    "images": news5,
                    "htext": htext1[4],
                    "btext": "전쟁군사박물관 협력망 활성화를 위해 2020년 1월 제작한 이동전시모듈 ‘6·25전 쟁과 무공훈장-가슴에 단 명예’는" +
                        " 12월 10일부터 2021년 1월 말까지 경남 창녕 박 진전쟁기념관에서 전시된다. 무공훈장의 제정과 수여에 관련된 이야기부터 " +
                        "새로 발굴한 초기 무공훈장의 모습까지 만나볼 수 있는 이동전시모듈은 지난 1년 동안 협력망기관 4개 박물관을 대상으로 한 순회전시에서 많은 호평을 받았다. " +
                        "2021년 에는 6·25전쟁 참전부대를 주제로 한 전시패널 1종이 추가되어 총 2종이 순회전시를 통해 좀 더 많은 기관으로부터 호응을 받을 것으로 기대된다."
                },
                {
                    "id": "6",
                    "images": news6,
                    "htext": htext1[5],
                    "btext": ""
                },
                {
                    "id": "7",
                    "images": "",
                    "htext": htext1[6],
                    "btext": "전쟁기념관은 전쟁·군사 관련 문화예술의 허브 역할을 위한 복합문화플랫폼 구축을 추진하고 있습니다. 전쟁·군사 주제를 다룬 다양한 분야의 국내외 도서와 기록물 등을 기증받고 있으니 많은 관심과 참여를 부탁드립니다.\n" +
                        "* 문의: 02-709-3227"
                },
            ]
        },
        {
            "id": "2",
            "title": "기념관 이슈",
            "sub": "",
            "summary": summ[0],
            "contents": [
                {
                    "id": "1",
                    "images": tm,
                    "htext": "",
                    "btext": "전쟁기념관 호국인물총서 시리즈의 두 번째 권으로 『유방백세: 어둠 속에서도 눈감지 않은 사람들』이 발간되 었다. 이는 2020년 봉오동·청산리전투 100주년을 기념하여, 암흑과도 같았던 일제강점기 속에서 독립을 위해 목숨 바쳐 투쟁한 호국인물 26명이 걸어간 위대한 발자취를 다루고 있다."

                },
                {
                    "id": "2",
                    "images": tm2,
                    "btext": "‘꽃다운 이름 백세토록 전하리’라는 뜻을 지닌 제2권의 제목 ‘유방백세(遺芳百世)’는 독립운동가들이 먼저 간 동지들을 떠올릴 때 종종 인용했던 표현이다. 1948년 김구가 직접 쓴 것으로 현재 효창공원 내 삼의사 묘 기단에 새겨져있다.네글자는 한글자씩 각장의 맨 앞에 배치하여 " +
                        "장의 시작을 알림과 동시에 호국인물들의 희생과 헌신을 영원히 기억하겠다는 의미를 담고 있다. 호국인물총서 2에서 눈에 띄는 두드러진 특징은 최신의 연구 성과는 물론, 기존에 많이 알려지지 않았던 자료 및 고지도·위성지도 등을 참고하여 호국인물들의 공적을 집대성했다는 점이다. " +
                        "국내의 경우, 각종 고지도와 당시 신문기사, 현재의 표석 등 여러 자료를 활용하여 주요 공적을 입체적으로 확인할 수 있도록 했다. 국외의경우, 익숙지 않은 중국 동북 지역의 지도 자료를 제시함으로써 어렴풋이 알고 있었던 항일독립전쟁의 모습을 한눈에 파악할 수 있도록 심혈을 기울였다."
                },
                {
                    "id": '3',
                    "images": tm3,
                    "btext": "1년 가까이 자료를 조사하고 공적을 연구하고 호국인물 한분 한분의 삶을 재 조명하면서, 그들의 숭고한 희생 정신에 절로 고개가 숙여지고 감사했다. 모쪼록 이 책을 접하는 많은 사람이 호국인물들의 헌신과, 이를 바탕으로 오늘의 평화와 번영이 꽃피울 수 있었음을 기억 해주었으면 한다."
                }
            ]
        },
        {
            "id": "3",
            "title": "2021년 이달의 호국인물 선정",
            "sub": "",
            "summary": "전쟁기념관은 2021년 ‘이달의 호국인물’로 홍재근 육군일등병 등 12명을 선정했다. " +
                "특히 올해는 코로나19 관련, 기존의 대면 현양행사에 변화를 주어 온택트 시대에 부합하는 전시와 세미나," +
                " 영상 제작, 온라인 추모공간 신설 등 호국인물들의 공적과 숭고한 희생정신의 의미를 다양한 온오프라인 콘텐츠로 선보일 예정이다.",
            "contents": [
                {
                    "id": "1",
                    "images": man,
                }
            ]
        }
    ]

    const special = Specials.find((p) => p.id === match.params.id)

    return (

        <Layout>
            <div className="space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                <Col>
                                    <div
                                        className="monthly-grid-post"
                                    >
                                        <div className="monthly-grid-post__title">

                                            <span>{"MEMORIAL STORY + "}
                                                <span style={{color: "lightpink"}}>
                                                      {special.title}
                                                </span>
                                            </span>
                                            <div className="monthly-grid-post__title">
                                                <h3
                                                    className="mt-3"
                                                >
                                                    {special.sub}
                                                </h3>
                                            </div>

                                            {special.summary
                                                ?
                                                <div style={{textAlign: "-webkit-center"}}>
                                                    <div className="monthly-grid-post__summary monthly-grid-post__summary__80"
                                                        style={{border: "none"}}
                                                    >
                                                        <div>
                                                            {special.summary}
                                                        </div>
                                                    </div>
                                                </div>

                                                : ""
                                            }
                                        </div>
                                        {special.contents &&
                                        special.contents.map((special, i) => (
                                            <div key={i}>
                                                <div
                                                    className="monthly-grid-post__content monthly-grid-post__content__spe"
                                                    style={{letterSpacing: "-1px", marginBottom: "30px"}}
                                                >
                                                    <Container style={{width: "70%"}}>
                                                        <h2 style={{fontSize: '32px', fontWeight: "bold"}}>
                                                            {special.htext}
                                                        </h2>
                                                    </Container>
                                                </div>

                                                {special.images ?
                                                    <div className="monthly-grid-post__image  text-center space-mb--r50 space-mt--r50">
                                                        <img
                                                            className="img-fluid"
                                                            style={{width: "60%"}}
                                                            src={special.images}
                                                            alt="/"
                                                        />
                                                    </div> : ""
                                                }


                                                <div
                                                    className="monthly-grid-post__content"
                                                    style={{letterSpacing: "-1px"}}
                                                >
                                                    {/*<h2>*/}
                                                    {/*    {special.htext}*/}
                                                    {/*</h2>*/}
                                                    <Container style={{width: "60%"}}>
                                                        <p className="post-excerpt">
                                                            {special.btext}
                                                        </p>
                                                    </Container>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>

    );
};

export default Special;
