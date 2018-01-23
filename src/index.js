import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './reducers/reducer';
import jQuery from 'jquery';
import Tether from 'tether';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
window.jQuery = jQuery;
window.Tether = Tether;
require('../node_modules/bootstrap/js/src/collapse');
require('../node_modules/bootstrap/js/src/util');
require('bootstrap');

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStore(reducers, {}, applyMiddleware(ReduxPromise, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
