import * as React from "react";
import IconSearch from "../../../images/ic_search.svg";

class SearchBar extends React.Component {
    render(){
        return (
            <div className="leftSide-search">
                <img src={IconSearch} alt=""/>
                <p>Search Here…</p>
            </div>
        )
    }
}

export default SearchBar;
