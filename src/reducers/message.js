import * as ACTIONS from '../constants/message';
import { createReducer } from './createReducer';

const initialState = {
  items: [
    { id: 2, message: "test" }
  ]
};

function deleteMessage(state, action) {
  const messageIndex = state.items.filter(m => m.id == action.id);
  if (messageIndex) {
    state.items.splice(messageIndex, 1);
  }
  return {
    ...state,
    items: state.items
  };
}

export default createReducer(initialState, {
  [ACTIONS.DELETE_MESSAGE]: deleteMessage
});