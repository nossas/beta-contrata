import * as ACTIONS from '../constants/messages';
import { createReducer } from './createReducer';
import { messages } from '../../data/messages';

const initialState = {
  items: messages,
  currentItem: null
};

function deleteMessage(state, action) {
  let items =  state.items;
  for (let key in messages) {
    if (key == action.id ) {
      delete items[key];
    }
  }
  return {
    ...state,
    items
  };
}

function setCurrentMessage(state, action) {
  return {
    ...state,
    currentItem: action.id || null
  };
}

function editMessage(state, action) {
  const { oldKey, key, message } = action.data
  const messages = state.items;
  if (oldKey == key) {
    messages[oldKey] = message;
  } else {
    delete messages[oldKey];
    messages[key] = message;
  }  
  return {
    ...state,
    items: messages
  };
}

export default createReducer(initialState, {
  [ACTIONS.DELETE_MESSAGE]: deleteMessage,
  [ACTIONS.EDIT_MESSAGE]: editMessage,
  [ACTIONS.SET_CURRENT_MESSAGE]: setCurrentMessage    
});