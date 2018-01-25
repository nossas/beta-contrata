import { createStore } from 'redux';
import reducers from '../reducers/index';

export function configureStore() {
  return createStore(
    reducers
  );
}