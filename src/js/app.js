import 'babel-polyfill';
require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Application </h1>
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
