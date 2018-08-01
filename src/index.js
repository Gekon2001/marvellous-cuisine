import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import Router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import './styles/app-styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app-root')
);
