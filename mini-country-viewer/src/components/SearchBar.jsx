import React from "react";

const SearchBar = ({ searchCountry, setSearchCountry }) => (
  <input
    type="text"
    placeholder="Search for a country..."
    value={searchCountry}
    onChange={(e) => setSearchCountry(e.target.value)}
    aria-label="Search for a country"
  />
);

export default SearchBar;
