import { FETCH_DETAILS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
