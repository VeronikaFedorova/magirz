import React from "react";
import "./SearchBar.css";

const SearchBar = () => {

  return (
    <div className="search_field">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
