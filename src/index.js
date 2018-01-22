import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>, 
  rootElement);