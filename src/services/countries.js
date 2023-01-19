import { checkError, client } from './client.js';

// export async function fetchAllCountries() {
//   const resp = await client.from('countries').select('*');
//   // console.log('resp', resp);
//   return checkError(resp);
// }

export async function fetchAllCountries(order, searchByName) {
  let query = client.from('countries').select('*');

  if (order === 'asc') query = query.order('name', { ascending: true });

  if (order === 'desc') query = query.order('name', { ascending: false });

  if (searchByName) query = query.ilike('name', `%${searchByName}%`);

  const resp = await query;

  return checkError(resp);
}
