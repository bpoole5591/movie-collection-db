import { FETCH_USER } from '../actions';

const initialState = { googleId: '' };

export default (state = initialState, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case FETCH_USER:
      return Object.assign ({}, state, action.payload);
    default:
      return state;
  }
};

