import React from 'react';
import { Link } from'react-router-dom';


const MobileMenuNav = ({getActiveStatus}) => {

    // useEffect(() => {
    //     const offCanvasNav = document.querySelector(
    //         "#offcanvas-mobile-menu__navigation"
    //     );
    //     const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
    //         ".mobile-sub-menu"
    //     );
    //     const anchorLinks = offCanvasNav.querySelectorAll("a");
    //
    //     for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
    //         offCanvasNavSubMenu[i].insertAdjacentHTML(
    //             "beforebegin",
    //             "<span class='menu-expand'><i></i></span>"
    //         );
    //     }
    //
    //     const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    //     const numMenuExpand = menuExpand.length;
    //
    //     for (let i = 0; i < numMenuExpand; i++) {
    //         menuExpand[i].addEventListener("click", (e) => {
    //             sideMenuExpand(e);
    //         });
    //     }
    //
    //     for (let i = 0; i < anchorLinks.length; i++) {
    //         anchorLinks[i].addEventListener("click", () => {
    //             getActiveStatus(false);
    //         });
    //     }
    // });
    //
    // const sideMenuExpand = (e) => {
    //     e.currentTarget.parentElement.classList.toggle("active");
    // };

    return (
        <nav
            className="offcanvas-mobile-menu__navigation"
            id="offcanvas-mobile-menu__navigation"
        >
            <ul>
                <li className="">
                    <Link to="/">
                        MONTHLY STORY
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/monthly/1">
                                신년사
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/monthly/2">
                                Story
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="">
                    <Link to="/">
                        MEMORIAL STORY
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/sub/1">
                                전쟁과 문화
                            </Link>

                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/2">
                                기념관 이야기 1
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/3">
                                기념관 이야기 2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/4">
                                기념관 이야기 3
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/5">
                                역사의 순간
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/6">
                                박물관 탐방
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/sub/7">
                                흥미로운 무기 개발사
                            </Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/special/1">
                                뉴스 브리핑
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/special/2">
                                기념관 이슈
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/special/3">
                                2021년 이달의 호국인물 선정
                            </Link>
                        </li>
                    </ul>
                </li>

                {/*<li className="menu-item-has-children">*/}
                {/*    <Link to="/">*/}
                {/*        Special*/}
                {/*    </Link>*/}
                {/*    <ul className="mobile-sub-menu">*/}
                {/*        <li className="menu-item-has-children">*/}
                {/*            <Link to="/special/1">*/}
                {/*                뉴스 브리핑*/}
                {/*            </Link>*/}
                {/*        </li>*/}

                {/*        <li className="menu-item-has-children">*/}
                {/*            <Link to="/special/2">*/}
                {/*                기념관 이슈*/}
                {/*            </Link>*/}
                {/*        </li>*/}

                {/*        <li className="menu-item-has-children">*/}
                {/*            <Link to="/special/3">*/}
                {/*                2021년 이달의 호국인물 선정*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default MobileMenuNav;
