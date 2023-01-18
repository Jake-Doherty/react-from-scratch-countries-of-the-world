import React from 'react';

export default function CountryCard({ name, iso2 }) {
  const iso = iso2.toLowerCase();
  return (
    <div className="country-card">
      <div className="details">
        <div className="country-name">{name}</div>
        <img src={`https://flagcdn.com/16x12/${iso}.png`} alt={name} />
      </div>
    </div>
  );
}
