import { combineReducers } from 'redux';

import MessageReduce from './MessageReduce'


const rootReducer = combineReducers({
  messages : MessageReduce
});

export default rootReducer;