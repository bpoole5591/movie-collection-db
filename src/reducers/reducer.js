import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';

const rootReducer = combineReducers({
  movie: MovieReducer,
});

export default rootReducer;
