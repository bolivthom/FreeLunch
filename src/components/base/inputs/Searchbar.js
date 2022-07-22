import * as React from "react";
import { Link } from "react-router-dom";
//Icons
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import GlobalContext from "../../context/GlobalContext";

function Searchbar({style}) {
    const { searchTerm, setSearchTerm } = React.useContext(GlobalContext);

    const updateSearch = (evt, value) => {
        setSearchTerm(evt.target.value);
    }

    return (
        <div style={style} className="search-container">
            <input className="input" type="text" placeholder="Search" onKeyUp={updateSearch} defaultValue={searchTerm}/>
            <div className="image"> <SearchIcon/></div>
        </div>
    );
}

export default Searchbar;