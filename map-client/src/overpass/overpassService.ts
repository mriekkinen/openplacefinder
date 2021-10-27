import axios from 'axios';
import { OverpassJson } from 'overpass-ts';

const apiBaseUrl = 'https://overpass-api.de/api/interpreter';

export const fetchOverpass = async (query: string): Promise<OverpassJson | null> => {
  try {
    console.log('Fetching data from the Overpass API')
    console.log(query);
    const response = await axios.post<OverpassJson>(apiBaseUrl, query);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
