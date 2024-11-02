import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTermState] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTermState(value);
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
