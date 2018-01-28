import axios from 'axios';
// import { hashHistory } from 'react-router';
// import CreateShelf from '../../server/database/queries/CreateShelf'

const API_KEY = '449a384f';
const ROOT_URL = 'http://www.omdbapi.com/';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_ERROR = 'CREATE_ERROR';
export const ADD_USER = 'ADD_USER';
export const COLLECTION_ADD = 'COLLECTION_ADD';
export const FETCH_COLLECTION = 'FETCH_COLLECTION';
export const FETCH_COL_DETAILS = 'FETCH_COL_DETAILS';
export const DELETE_MOVIE = 'DELETE_MOVIE;';

export const fetchMovie = term => {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}?s=${term}&apikey=${API_KEY}`)
      .then(res => dispatch({ type: FETCH_MOVIE, payload: res.data.Search }));
  };
};

// http://www.omdbapi.com/?s=home&apikey=449a384f

export const fetchDetails = id => {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}?i=${id}&apikey=${API_KEY}`)
      .then(res => dispatch({ type: FETCH_DETAILS, payload: res.data }));
  };
};
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

export function addUser(googleID, firstName) {
  return {
    type: ADD_USER,
    payload: axios
      .post('/api/user', { googleID, firstName })
      .then(response => response.data)
      .catch(console.log),
  };
}

export function collectionAdd(googleID, imdbID) {
  return {
    type: COLLECTION_ADD,
    payload: axios
      .post('/api/collection', { googleID, imdbID })
      .then(response => response.data)
      .catch(console.log),
  };
}

export function fetchCollection(googleID) {
  return {
    type: FETCH_COLLECTION,
    payload: axios.get('/api/collection', { googleID }).then(response => {
      console.log(response.data);
      return response.data;
    }),
  };
}

export const fetchColDetails = movies => {
  const details = movies.map(movie => axios.get(`${ROOT_URL}?i=${movie.imdbid}&apikey=${API_KEY}`));
  return {
    type: FETCH_COL_DETAILS,
    payload: axios
      .all(details)
      .then(response => response.map(response => response.data))
      .catch(console.log),
  };
};

export const deleteMovie = (googleID, imdbID) => {
  return {
    type: DELETE_MOVIE,
    payload: axios
      .delete(`/api/collection/delmov/${googleID}/${imdbID}`)
      .then(response => response.data)
      .catch(console.log),
  };
};
