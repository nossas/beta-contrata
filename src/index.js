import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';
import  './assets/style/base/page.css'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider  store={ configureStore() }>
    <App />
  </Provider>, 
  rootElement);