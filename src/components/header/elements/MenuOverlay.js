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
                                        <Link to="/">
                                            Monthly Story
                                        </Link>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <Link to="/">
                                                    Story1
                                                </Link>
                                                <img/>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    Story2
                                                </Link>
                                                <img/>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <Link to="/">
                                            Inside
                                        </Link>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <Link to="/">
                                                    전쟁, 그리고...
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    문화 속 전쟁
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    기념관 이야기.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    기념관 이야기.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    역사의 순간
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    호국 현장
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <Link to="/">
                                            특집
                                        </Link>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <Link to="/">
                                                    박물관 탐방
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    뉴스 브리핑
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <Link to="/">
                                            11월!
                                        </Link>
                                        <ul className="sub-menu--mega__list">
                                            <li>
                                                <Link to="/">
                                                    퀴즈 이벤트
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    11월의 호국의 인물
                                                </Link>
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
