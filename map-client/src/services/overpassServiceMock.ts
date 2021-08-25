import { OverpassJson } from 'overpass-ts';
// import mockData from './teaShopsInLondon';
import mockData from './restaurantsInHelsinki';

const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchOverpass = async (query: string): Promise<OverpassJson | null> => {
  console.log('Fetching mock data');
  await sleep(1000);  // Simulate a network delay
  return Promise.resolve(mockData);
};
