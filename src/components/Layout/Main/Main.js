import React, { useState } from 'react';
import { useAllCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

import background from '../../../background.jpg';
import './Main.css';

export default function Main() {
  const [order, setOrder] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const [loadState, setLoadState] = useState('loading');

  const { countries, error } = useAllCountries(order, searchByName, setLoadState);

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
    <main
      style={{
        backgroundImage: `url(${background})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
      }}
    >
      <div className="search-bar-container">
        <div className="search-container">
          <select
            className="continent-select search-input"
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
          <select
            className="select-order search-input"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="asc">Alphabet Ascending</option>
            <option value="desc">Alphabet Descending</option>
          </select>
          <input
            className="search-input"
            placeholder="Search by country name"
            onChange={(e) => setSearchByName(e.target.value)}
          />
        </div>
        <p id="error-and-load-display">
          {error} {loadState}
        </p>
      </div>
      <div className="countries-list">
        {filteredCountries.map((country) => {
          if (selectedContinent === 'All') {
            return <CountryCard key={country.id} {...country} />;
          } else if (country.continent === selectedContinent) {
            return <CountryCard key={country.id} {...country} />;
          }
        })}
      </div>
      {/* <CountryCard key={country.id} {...country} />} )} */}
    </main>
  );
}
