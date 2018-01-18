const tmdb = "https://api.themoviedb.org/3/search/movie?api_key=";

const API_KEY = 'c7447852f8af11efbe693e4b67b07fa7';

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(term) {
  const request = tmdb.get({API_KEY}`&query${term}`);

  return {
    type: FETCH_MOVIE,
    payload: request,
  };
}

// http://www.omdbapi.com/?t=300&apikey=449a384f
//https://api.themoviedb.org/3/search/movie?api_key=c7447852f8af11efbe693e4b67b07fa7&query=up

