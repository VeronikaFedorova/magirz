import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="search_field">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
