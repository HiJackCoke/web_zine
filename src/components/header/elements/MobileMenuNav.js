import React, { useEffect } from 'react';
import { Link } from'react-router-dom';

const MobileMenuNav = ({getActiveStatus}) => {

    useEffect(() => {
        const offCanvasNav = document.querySelector(
            "#offcanvas-mobile-menu__navigation"
        );
        const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
            ".mobile-sub-menu"
        );
        const anchorLinks = offCanvasNav.querySelectorAll("a");

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML(
                "beforebegin",
                "<span class='menu-expand'><i></i></span>"
            );
        }

        const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
        const numMenuExpand = menuExpand.length;

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", (e) => {
                sideMenuExpand(e);
            });
        }

        for (let i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener("click", () => {
                getActiveStatus(false);
            });
        }
    });

    const sideMenuExpand = (e) => {
        e.currentTarget.parentElement.classList.toggle("active");
    };

    return (
        <nav
            className="offcanvas-mobile-menu__navigation"
            id="offcanvas-mobile-menu__navigation"
        >
            <ul>
                <li className="menu-item-has-children">
                    <Link to="/">
                        Home
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            {/*<ul className="mobile-sub-menu">*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            One*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            two*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            three*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        Home
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            {/*<ul className="mobile-sub-menu">*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            One*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            two*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            three*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        Home
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            {/*<ul className="mobile-sub-menu">*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            One*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            two*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            three*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        Home
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            {/*<ul className="mobile-sub-menu">*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            One*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            two*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            three*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenuNav;
