import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';
import DetailReducer from './detail_reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  movie: MovieReducer,
  detail: DetailReducer
});

export default rootReducer;