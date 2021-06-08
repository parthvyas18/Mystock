import React, { useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/work.css'

const SearchBar = ({triger}) => {
    const [Search, setSearch] = useState("");
    
    const CallWork = (event) =>{
        event.preventDefault();
        triger(Search);
    };
    return (
        <div className="SearchBar">
            <input className="inputSearch" type="text" placeholder="Search to view stocks ..." onChange={(event) => setSearch(event.target.value)} />
            <button className="fa fa-search searchBtn" onClick={CallWork}></button>
        </div>
    );
}
export default SearchBar