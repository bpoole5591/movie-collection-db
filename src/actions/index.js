import axios from 'axios';

const API_KEY = '449a384f';
const ROOT_URL = 'http://www.omdbapi.com/?s=';

export const FETCH_MOVIE = 'FETCH_MOVIE';

let movies = [];

export function fetchMovie(term) {
  const request = axios.get(`${ROOT_URL}${term}&apikey=${API_KEY}`);

  return {
    type: FETCH_MOVIE,
    payload: request,
  };
}

// http://www.omdbapi.com/?s=home&apikey=449a384f

// export const getUserDetails = (email) => {
//   // notice the return on the next line
//   return axios.put('http://localhost:3030/user', user) .then((data) => {
//       return {
//           type: UPDATE_USER_DETAILS,
//           user:data.data
//       };
//   });
// });
