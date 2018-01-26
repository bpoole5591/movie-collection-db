import { ADD_USER } from '../actions';

const initialState = {
  googleId: '',
};

export default (state = initialState, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case ADD_USER + '_FULFILLED':
    return Object.assign({}, state, { googleId: action.payload });
    default:
      return state;
  }
};
