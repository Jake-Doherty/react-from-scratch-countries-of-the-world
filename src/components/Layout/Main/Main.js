import React from 'react';
import { useAllCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useAllCountries();

  const filteredCountries = countries.filter((countriesArray) => countriesArray);

  const continents = [...new Set(filteredCountries.map(({ continent }) => continent))];

  const filteredContinents = continents.filter((continent) => {
    if (continent === null) {
      return false;
    } else {
      return continent;
    }
  });

  return (
    <main>
      <select className="continent-select">
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
