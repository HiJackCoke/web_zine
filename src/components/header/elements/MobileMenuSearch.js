import React from 'react';
import {IoIosSearch} from 'react-icons/io'

const MobileMenuSearch = () => {
    return (
        <div
            className="offcanvas-mobile-menu__search"
            style={{backgroundColor: "#D0BEE6"}}
        >
            <form>
                <input
                    type="search"
                    placeholder="Search here"
                    style={{backgroundColor: "#D0BEE6"}}
                />
                <button type="submit">
                    <IoIosSearch />
                </button>
            </form>
        </div>
    );
};

export default MobileMenuSearch;
