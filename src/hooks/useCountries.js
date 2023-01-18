import { useEffect, useState } from 'react';

import { fetchAllCountries } from '../services/countries.js';

export function useAllCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (e) {
        setError('Error fetching countries, if this persists please contact support.');
      }
    };
    fetchCountries();
  }, []);
  return { countries, error };
}
