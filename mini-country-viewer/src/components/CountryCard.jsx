import React, { useState } from "react";
import "../styles/main.css";

const CountryCard = ({ country }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // sets if card will expand or collapse
  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-container basis-full md:basis-2xs lg:basis-2xs">
      <div
        className="p-4 cursor-pointer bg-white rounded-md shadow-lg hover:bg-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center">
          <img
            className="flag-img h-full object-cover object-center"
            src={country.flag}
            alt={`${country.name}'s flag`}
          />

          <div>
            <h3 className="text-base">
              {country.name} ({country.code})
            </h3>

            <h3 className="text-sm font-bold">{country.region}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
