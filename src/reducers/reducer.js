import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';
import DetailReducer from './detail_reducer';

const rootReducer = combineReducers({
  movie: MovieReducer,
  detail: DetailReducer
});

export default rootReducer;

    