import React, {useState, Fragment} from 'react';
import {Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {
    IoIosSearch,
    IoIosPrint,
    IoIosMenu
} from 'react-icons/io';

import SearchOverlay from "./elements/SearchOverlay";
import MenuOverlay from "./elements/MenuOverlay";
import MobileMenu from "./elements/MobileMenu";

import img from '../../assets/images/logo-black.png'
import img2 from '../../assets/images/logo-center.png'

const Header = () => {


    const [ offCanvasSearch, setOffCanvasSearch ] = useState(false)
    const [ offCanvasMenu, setOffCanvasMenu ] = useState(false);
    const [ offCanvasMobileMenu, setOffCanvasMobileMenu ] = useState(false);



    const printWindow = () => {
        document.getElementById('print-area'.innerHTML)
        window.print()
    }


    return (
        <Fragment>
            <header
                className="topbar-shadow"
                style={{backgroundColor: "#D0BEE6"}}
            >
                <Container className="wide">
                    <div
                        className="header-content d-flex align-items-center justify-content-between position-relative"
                        style={{height: "100px"}}
                    >
                        {/* logo */}
                        <Col lg={4}>
                            <div className="header-content__logo d-flex align-items-center space-pr--15">

                                <a href="https://www.warmemo.or.kr/front/main.do#">
                                    <img src={img} alt="/" className="img-fluid"/>
                                </a>
                            </div>
                        </Col>

                        <Col
                            lg={4}
                            className="text-center"
                        >
                            <Link to="/">
                                <img src={img2} alt="/" className="img-fluid"/>
                            </Link>
                            {/*<div className="text-center">Logo</div>*/}
                        </Col>



                        {/* icons */}
                        <Col lg={4}>
                            <div
                                className="header-content__icons space-pl--15"
                                style={{textAlign: "end"}}
                            >
                                <ul className="d-none d-lg-block">
                                    {/*<li>*/}
                                    {/*    <button*/}
                                    {/*        onClick={() => {*/}
                                    {/*            setOffCanvasSearch(true)*/}
                                    {/*            document*/}
                                    {/*                .querySelector("body")*/}
                                    {/*                .classList.add("overflow-hidden")*/}
                                    {/*        }}*/}
                                    {/*    >*/}
                                    {/*        <IoIosSearch />*/}
                                    {/*    </button>*/}
                                    {/*</li>*/}


                                    <li>
                                        <button
                                            onClick={() => {
                                                printWindow()
                                            }}
                                        >
                                            <IoIosPrint />
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => {
                                                setOffCanvasMenu(true)
                                                document
                                                    .querySelector("body")
                                                    .classList.add("overflow-hidden");
                                            }}
                                        >
                                            <IoIosMenu />
                                        </button>
                                    </li>
                                </ul>
                                <ul className="d-block d-lg-none">
                                    <li>
                                        <button onClick={() => setOffCanvasMobileMenu(true)}>
                                            <IoIosMenu />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </div>
                </Container>
            </header>

            <SearchOverlay
                active={offCanvasSearch}
                setActive={setOffCanvasSearch}
            />

            <MenuOverlay
                active={offCanvasMenu}
                setActive={setOffCanvasMenu}
            />

            <MobileMenu
                active={offCanvasMobileMenu}
                getActive={setOffCanvasMobileMenu}
            />
        </Fragment>
    );
};

export default Header;
