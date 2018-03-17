import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './global-styles';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();