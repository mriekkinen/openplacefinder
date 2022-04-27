import axios from 'axios';

const apiBaseUrl = '/api/descriptions';

export interface Description {
  key: string;
  value?: string;
  description?: string;
}

export const fetchDescription = async (key: string, value: string | undefined): Promise<Description> => {
  const tag = getTag(key, value);
  const response = await axios.get<Description>(`${apiBaseUrl}/${tag}`);
  // console.log(response.data);
  return response.data;
};

const getTag = (key: string, value: string | undefined) => {
  const val = value ? value : '*';
  return `${key}=${val}`;
};
