const imdb = require('imdb-api');

const API_KEY = '449a384f';

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(term) {
  const request = imdb
    .get(`${term}`, { apiKey: API_KEY, timeout: 30000 })
    //   .then(response => {
    //       console.log(response);
    // return response  })
    // .catch(err => console.log(err));
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
