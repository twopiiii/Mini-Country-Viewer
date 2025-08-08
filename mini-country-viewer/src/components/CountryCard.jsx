import React, { useState } from "react";

const CountryCard = ({ country }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // sets if card will expand or collapse
  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <h3>{country.name}</h3>
      </div>
    </div>
  );
};

export default CountryCard;
