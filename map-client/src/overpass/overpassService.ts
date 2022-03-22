import axios, { AxiosRequestConfig } from 'axios';
import { OverpassJson } from 'overpass-ts';

const apiBaseUrl = '/api/overpass';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'text/plain'
  }
};

/**
 * NOTE: You should wrap this call in a try-catch.
 * 
 * Axios may throw an exception, for instance, if the server
 * responds with a HTTP status code outside the 2xx range.
 */
export const fetchOverpass = async (query: string): Promise<OverpassJson> => {
  console.log('Fetching data from the Overpass API')
  console.log(query);
  const response = await axios.post<OverpassJson>(apiBaseUrl, query, config);
  // console.log(response.data);
  return response.data;
};
