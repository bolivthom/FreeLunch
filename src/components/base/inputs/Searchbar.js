import * as React from "react";
import { Link } from "react-router-dom";

//Icons
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

function Searchbar({style}) {
    return (
        <div style={style} className="search-container">
            <input className="input" type="text" placeholder="Search" />
            <div className="image">
                <SearchIcon/>
            </div>
        </div>
    );
}

export default Searchbar;