import { useEffect, useState } from "react";
// import countryData from "../public/countries.json";
import countriesData from "../src/assets/countries.json";
import SearchBar from "../src/components/SearchBar";
import CountryCard from "../src/components/CountryCard";
import "../src/styles/main.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const filteredCountries = countries;

  return (
    <>
      <img
        src="src/img/globe.png"
        alt="globe"
        className="globe justify-self-center mt-25 mb-15"
      />

      <div>
        <SearchBar></SearchBar>

        <hr className="border-gray-300 mb-6" />

        {/* Map over country array to display each country */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country}></CountryCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
