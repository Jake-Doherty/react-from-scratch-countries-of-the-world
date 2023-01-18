import React, { useState } from 'react';
import { useAllCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useAllCountries();

  const filteredCountries = countries.filter((countriesArray) => countriesArray);

  const continents = [...new Set(filteredCountries.map(({ continent }) => continent))];

  const filteredContinents = continents.map((continent) => {
    if (continent === null) {
      continent = 'All';
      return continent;
    } else {
      return continent;
    }
  });

  const [selectedContinent, setSelectedContinent] = useState('All');

  const handleContinentChange = (e) => {
    setSelectedContinent(e.target.value);
  };

  return (
    <main>
      <select
        className="continent-select"
        value={selectedContinent}
        onChange={handleContinentChange}
      >
        {filteredContinents.map((continent, i) => {
          return (
            <option key={i} value={continent}>
              {continent}
            </option>
          );
        })}
        ;
      </select>
      <p id="error-display">{error}</p>
      {filteredCountries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
