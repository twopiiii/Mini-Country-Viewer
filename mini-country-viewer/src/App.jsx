import { useEffect, useState } from "react";
// import countryData from "../public/countries.json";
import countriesData from "../src/assets/countries.json";
import SearchBar from "../src/components/SearchBar";
import CountryCard from "../src/components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const filteredCountries = countries;

  return (
    <>
      <div className="container">
        <SearchBar></SearchBar>
        {/* Map over country array to display each country */}
        {filteredCountries.map((country) => (
          <CountryCard key={country.name} country={country}></CountryCard>
        ))}
      </div>
    </>
  );
}

export default App;
