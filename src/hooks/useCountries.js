import { useEffect, useState } from 'react';

import { fetchAllCountries } from '../services/countries.js';

export function useAllCountries(order, searchByName) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetchAllCountries(order, searchByName);
        setCountries(data);
      } catch (e) {
        setError('Error fetching countries, if this persists please contact support.');
      }
    };
    fetchCountries();
  }, [order, searchByName]);
  return { countries, error };
}
