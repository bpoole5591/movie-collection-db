import { COLLECTION_ADD, FETCH_COLLECTION } from '../actions/index';

const initialState = { data: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case COLLECTION_ADD + '_FULFILLED':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    case FETCH_COLLECTION + '_PENDING':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    case FETCH_COLLECTION + '_REJECTED':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    case FETCH_COLLECTION + '_FULFILLED':
      console.log(action.payload);
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}
