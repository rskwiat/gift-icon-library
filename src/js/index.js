require('@scss/main.scss');

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import store from '@src/reducers/createStore';
import App from '@src/components/App';

WebFont.load({
  google: {
    families: ['Montserrat'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
