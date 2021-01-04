import React from 'react';
import { MdClose } from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {Link} from "react-router-dom";

const MenuOverlay = ({ active, setActive}) => {

    return (
        <div className={`menu-overlay ${active ? "active" : ""}`}>
            <button
                className="menu-overlay__close-icon"
                onClick={() => {
                    setActive(false)
                    document.querySelector("body").classList.remove("overflow-hidden")
                }}
            >
                <MdClose />
            </button>

            <div className="menu-overlay__content text-center">
                <div>
                    <nav className="header-content__navigation space-pl--15 d-none d-lg-block">
                        <ul>
                            <li>
                                <div className="d-flex">
                                    <h1>work</h1>
                                    <div>
                                        <h5>The War Memorial of Korea</h5>
                                        <h5>2020 Nov Vol.178</h5>
                                    </div>
                                    <GiClick
                                        style={{fontSize: "45px"}}
                                    />
                                </div>
                                <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                                    <li className="sub-menu--mega__title">
                                        <p>
                                            Monthly Story
                                        </p>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <a href="/monthly/1">
                                                    신년사
                                                </a>
                                                <img/>
                                            </li>
                                            <li>
                                                <a href='/monthly/2'>
                                                    Story
                                                </a>
                                                <img/>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <p>
                                            MEMORIAL STORY
                                        </p>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <a href="/sub/1">
                                                    전쟁과 문화
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/2">
                                                    기념관 이야기 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/3">
                                                    기념관 이야기 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/4">
                                                    기념관 이야기 3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/5">
                                                    역사의 순간
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/6">
                                                    박물관 탐방
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sub/7">
                                                    흥미로운 무기 개발사
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <p>
                                            SPECIAL
                                        </p>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <a href="/special/1">
                                                    뉴스 브리핑
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/special/2">
                                                    기념관 이슈
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/special/3">
                                                    2021년 이달의 호국인물 선정
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <p>
                                            SNS
                                        </p>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <a href="/">
                                                    SNS
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    SNS
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
