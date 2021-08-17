import { OverpassJson } from 'overpass-ts';
import mockData from './teaShopsInLondon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchOverpass = async (query: string): Promise<OverpassJson | null> => {
  console.log('Fetching mock data');
  return Promise.resolve(mockData);
};
