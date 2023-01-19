import { useEffect, useState } from 'react';

import { fetchAllCountries } from '../services/countries.js';

export function useAllCountries(order, searchByName, setLoadState) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadState('loading');
        const data = await fetchAllCountries(order, searchByName, setLoadState);
        setCountries(data);
        setLoadState('loaded');
      } catch (e) {
        setError('Error fetching countries, if this persists please contact support.');
        setLoadState('unable to load');
      }
    };
    fetchCountries();
  }, [order, searchByName, setLoadState]);
  return { countries, error };
}
