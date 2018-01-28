import { COLLECTION_ADD, FETCH_COLLECTION, FETCH_COL_DETAILS, DELETE_MOVIE, DELETE_COLLECTION } from '../actions/index';

const initialState = { data: [], details: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case COLLECTION_ADD + '_FULFILLED':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    // case FETCH_COLLECTION + '_PENDING':
    //   // console.log(action.payload);
    //   return Object.assign({}, state, { data: action.payload });
    // case FETCH_COLLECTION + '_REJECTED':
    //   console.log(action.payload);
    //   return Object.assign({}, state, { data: action.payload });
    case FETCH_COLLECTION + '_FULFILLED':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    case FETCH_COL_DETAILS + '_FULFILLED':
      return { ...state, details: [...state.details, action.payload] };
    case DELETE_MOVIE:
      return Object.assign({}, state, { data: action.payload });
    case DELETE_COLLECTION:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}
