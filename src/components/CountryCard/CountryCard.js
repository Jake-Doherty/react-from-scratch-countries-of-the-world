import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  const iso = iso2.toLowerCase();
  return (
    <div className="country-card">
      <div className="details">
        <div className="country-name">{name}</div>
        <img src={`https://flagcdn.com/${iso}.svg`} alt={name} />
      </div>
    </div>
  );
}
