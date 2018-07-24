import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
