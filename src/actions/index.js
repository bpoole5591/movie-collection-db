import axios from 'axios';
// import { hashHistory } from 'react-router';
// import CreateShelf from '../../server/database/queries/CreateShelf'

const API_KEY = '449a384f';
const ROOT_URL = 'http://www.omdbapi.com/';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_ERROR = 'CREATE_ERROR';

export function fetchMovie(term) {
  const request = axios.get(`${ROOT_URL}?s=${term}&apikey=${API_KEY}`).then(response => response.data.Search);

  return {
    type: FETCH_MOVIE,
    payload: request,
  };
}
// http://www.omdbapi.com/?s=home&apikey=449a384f

export function fetchDetails(id) {
  const request = axios.get(`${ROOT_URL}?i=${id}&apikey=${API_KEY}`).then(response => response.data);
  return {
    type: FETCH_DETAILS,
    payload: request,
  };
}
// http://www.omdbapi.com/?i=tt0099785&apikey=449a384f

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

// export const CreateShelf = props => dispatch =>
//   CreateShelfProxy(props)
//     .then(shelf => {
//       hashHistory.push(`shelves/${shelf.id}`);
//     })
//     .catch(error => {
//       console.log(error);
//       dispatch({ type: CREATE_ERROR, payload: error });
//     });
