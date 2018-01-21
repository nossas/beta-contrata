import * as actions from '../constants/message';

export function deleteMessage(id) {
  return {
    type: actions.DELETE_MESSAGE,
    id
  };
}