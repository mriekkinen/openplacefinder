/**
 * This is a simple API proxy for Overpass. It makes queries to a public
 * instance of the Overpass API on behalf of the app's users.
 * 
 * Why? This service sets the User-Agent header to a unique value, as
 * requested by the API maintainers. According to the current specs,
 * this should be possible in the browser as well, but unfortunately
 * Chrome and Safari don't support it.
 * 
 * The API maintainers also request additional measures, such as rate limiting.
 * Currently, that isn't supported but we don't expect it to be an issue.
 */

import express, { Request, Response } from 'express';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { OverpassJson } from 'overpass-ts';

const apiBaseUrl = 'https://overpass.kumi.systems/api/interpreter';

// TODO: Update the user agent string
const config: AxiosRequestConfig = {
  headers: {
    'User-Agent': 'OpenPlaceFinder https://openplacefinder.org',
    'Content-Type': 'text/plain'
  }
};

type ResponseType = Response<OverpassJson | string>;

const router = express.Router();

router.post('/', (req: Request, res: ResponseType) => {
  const query: unknown = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).send('Missing or invalid query');
  }

  console.log('---');
  console.log(query);

  axios.post<OverpassJson>(apiBaseUrl, query, config)
    .then(response => res.json(response.data))
    .catch(error => handleError(error, res));

  return;
});

const handleError = (error: unknown, res: ResponseType) => {
  console.log('Overpass API error:', error);

  if (!axios.isAxiosError(error)) {
    return handleUnexpectedError(error, res);
  }

  return handleAxiosError(error, res);
};

const handleAxiosError = (error: AxiosError, res: ResponseType) => {
  // See https://axios-http.com/docs/handling_errors
  if (error.response) {
    // The server responded with a status code outside the 2xx range
    const contentType = error.response.headers['content-type'];
    const message = getErrorMessage(contentType, error.response.data);
    return res
      .status(error.response.status)
      .send(message);
  } else if (error.request) {
    // The server produced no response
    return res.status(504).send('No response from the Overpass API');
  } else {
    // Setting up the request produced an error
    return res.status(500).send(error.message);
  }
};

const getErrorMessage = (contentType: string, data: unknown): string => {
  if (!data || typeof data !== 'string') {
    return JSON.stringify(data);
  }

  if (!contentType.startsWith('text/html')) {
    return data;
  }

  // Convert the HTML response into plain text
  // (Overpass seems to send errors formatted as HTML)
  const messages = data
    .replace(/\n/g, ' ')
    .split(/<p>/i).map(s =>
      s.replace('</p>', '')
       .replace(/&quot;/g, '"')
       .replace('<strong style="color:#FF0000">Error</strong>', 'Error')
       .replace('</body> </html>', '')
    ).slice(2);

  return messages.join('\n\n');
};

const handleUnexpectedError = (_error: unknown, res: ResponseType) => {
  return res.status(500).send('Something unexpected happened');
};

export default router;
