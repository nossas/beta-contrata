import * as actions from '../constants/messages';

export function deleteMessage(id) {
  return {
    type: actions.DELETE_MESSAGE,
    id
  };
}

export function setCurrentMessage(id) {
  return {
    type: actions.SET_CURRENT_MESSAGE,
    id
  };
}

export function editMessage(data) {
  return {
    type: actions.EDIT_MESSAGE,
    data
  };
}

export function searchMessage(term) {
  return {
    type: actions.SEARCH_MESSAGE,
    term
  };
}

export function clearSearch() {
  return {
    type: actions.CLEAR_SEARCH
  };
}