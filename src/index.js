import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import './index.css';
import App from './App';
import Login from './components/login/login';
import reducers from './reducers/reducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} /> 
        <Route path="/" component={App} /> 
      </Switch>
      </BrowserRouter>  
  </Provider>
  , document.querySelector('#root'));

