import React, { useState } from 'react';
import { useAllCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const [order, setOrder] = useState('');
  const [searchByName, setSearchByName] = useState('');

  const { countries, error } = useAllCountries(order, searchByName);

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
      <select className="select-order" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="">Select an option</option>
        <option value="asc">Alphabet Ascending</option>
        <option value="desc">Alphabet Descending</option>
      </select>
      <input
        placeholder="Search by country name"
        onChange={(e) => setSearchByName(e.target.value)}
      />
      <p id="error-display">{error}</p>
      {filteredCountries.map((country) => {
        if (selectedContinent === 'All') {
          return <CountryCard key={country.id} {...country} />;
        } else if (country.continent === selectedContinent) {
          return <CountryCard key={country.id} {...country} />;
        }
      })}
      {/* <CountryCard key={country.id} {...country} />} )} */}
    </main>
  );
}
