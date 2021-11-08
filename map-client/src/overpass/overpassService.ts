import axios, { AxiosRequestConfig } from 'axios';
import { OverpassJson } from 'overpass-ts';

const apiBaseUrl = '/api/overpass';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'text/plain'
  }
};

export const fetchOverpass = async (query: string): Promise<OverpassJson | null> => {
  try {
    console.log('Fetching data from the Overpass API')
    console.log(query);
    const response = await axios.post<OverpassJson>(apiBaseUrl, query, config);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
