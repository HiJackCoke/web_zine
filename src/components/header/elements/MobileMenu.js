import React from 'react';
import { IoIosClose } from 'react-icons/io';
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({ active, getActive }) => {
    return (
        <div className={`offcanvas-mobile-menu ${active ? "active" : ""}`}>
            <div
                className="offcanvas-mobile-menu__overlay-close"
                onClick={() => getActive(false)}
            />
            <div className="offcanvas-mobile-menu__wrapper">
                <button
                    className="offcanvas-mobile-menu__close"
                    onClick={() => getActive(false)}
                >
                    <IoIosClose />
                </button>
                <div className="offcanvas-mobile-menu__content-wrapper">
                    <div
                        className="offcanvas-mobile-menu__content"
                        style={{ backgroundColor: "#FFD1E8" }}
                    >
                        <MobileMenuSearch/>

                        <MobileMenuNav getActiveStatus={getActive}/>

                        <MobileMenuWidgets/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
