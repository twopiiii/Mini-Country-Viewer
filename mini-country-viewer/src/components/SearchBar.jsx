import React from "react";

const SearchBar = ({ searchCountry, setSearchCountry }) => (
  <div className="search-bar-container">
    <input
      className="search-bar w-full mb-8 text-center text-2xl focus:outline-none"
      type="text"
      placeholder="Click here to search for a country"
      value={searchCountry}
      onChange={(e) => setSearchCountry(e.target.value)}
      aria-label="Search for a country"
    />
  </div>
);

export default SearchBar;
