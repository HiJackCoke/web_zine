import React from 'react';
import { MdClose } from 'react-icons/md'

const SearchOverlay = ({active, setActive}) => {
    return (
        <div
            className={`search-overlay ${active ? "active" : ""}`}
            style={{backgroundColor: "#D0BEE6"}}
        >
            <button
                className="search-overlay__close-icon"
                onClick={() => {
                    setActive(false)
                }}
            >
                <MdClose/>
            </button>

            <div className="search-overlay__content">
                <form>
                    <input
                        type="search"
                        placeholder="Search"
                    />
                </form>
                <div className="search-overlay__hint"># Hit enter to search</div>
            </div>
        </div>
    );
};

export default SearchOverlay;
