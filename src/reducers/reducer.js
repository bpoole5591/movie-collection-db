import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';
import DetailReducer from './detail_reducer';
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import CollectionReducer from './collection_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  movie: MovieReducer,
  detail: DetailReducer,
  user: UserReducer,
  collection: CollectionReducer
});

export default rootReducer;
