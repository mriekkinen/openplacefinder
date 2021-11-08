/**
 * This is a simple API proxy for Overpass. It makes queries to a public
 * instance of the Overpass API on behalf of the app's users.
 * 
 * Why? This service sets the User-Agent header to a unique value, as
 * requested by the API maintainers. According to the current specs,
 * this should be possible in the browser as well, but Chrome and Safari
 * don't support it.
 * 
 * The API maintainers also request additional measures, such as rate limiting.
 * Currently, that isn't supported but we don't expect it to be an issue.
 */

import express, { Request, Response } from 'express';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { OverpassJson } from 'overpass-ts';

const apiBaseUrl = 'https://overpass-api.de/api/interpreter';

// TODO: Update the user agent string
const config: AxiosRequestConfig = {
  headers: {
    'User-Agent': 'Testing (new app under development)',
    'Content-Type': 'text/plain'
  }
};

type RequestType = Request<{}, {}, string>;
type ResponseType = Response<OverpassJson | { error: string }>;

const router = express.Router();

router.post('/', async (req: RequestType, res: ResponseType) => {
  const query = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid query' });
  }

  console.log('---');
  console.log(query);

  try {
    const response = await axios.post<OverpassJson>(apiBaseUrl, query, config);
    return res.json(response.data);
  } catch (error) {
    return handleError(error, res);
  }
});

const handleError = (error: any, res: ResponseType) => {
  console.log('Overpass API error:', error.toJSON());

  if (!axios.isAxiosError(error)) {
    return handleUnexpectedError(error, res);
  }

  return handleAxiosError(error, res);
};

const handleAxiosError = (error: AxiosError, res: ResponseType) => {
  // See https://axios-http.com/docs/handling_errors
  if (error.response) {
    // The server responded with a status code outside the 2xx range
    return res
      .status(error.response.status)
      .json({ error: error.response.data });
  } else if (error.request) {
    // The server produced no response
    return res.status(504).json({ error: 'No response' });
  } else {
    // Setting up the request produced an error
    return res.status(500).json({ error: error.message });
  }
};

const handleUnexpectedError = (_error: any, res: ResponseType) => {
  res.status(500).json({ error: 'Something unexpected happened' });
};

export default router;
