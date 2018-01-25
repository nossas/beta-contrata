import reducer from './messages'
import * as types from '../constants/messages'
import { messages } from '../../data/messages';

describe('reducer', () => {

  let initialState;

  beforeEach(() => {
    initialState = {
      items: messages,
      currentItem: null
    }
  })

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      items: messages,
      currentItem: null
    });
  });

  it('should the value currentItem to be null when not receive id', () => {
    expect(
      reducer(initialState, { 
        type: types.SET_CURRENT_MESSAGE,
        id: null
      })
    ).toEqual(initialState);
  });

  it('should the value currentItem to be a string as id', () => {
    const messageId = Object.keys(messages)[0];
    expect(reducer(initialState, {
      type: types.SET_CURRENT_MESSAGE,
      id: messageId 
    })).toEqual({
      ...initialState,
      currentItem: messageId
    });
  });

  it('should edit a message from state after receive a message id', () => {
    const editMessageId = Object.keys(messages)[1];
    const state = { ...initialState };
    state.items[editMessageId] = "Hi girl!:D";
    const fakeAction = {
      type: types.EDIT_MESSAGE,   
      data: {
        oldKey: editMessageId,
        key: editMessageId,
        message: "Hi girl!:D"
      } 
    };
    expect(reducer(initialState, fakeAction)).toEqual(state);
  });

  it('should the delete message', () => {
    const messageId = Object.keys(messages)[2];
    let messagesDelete = { ...messages };
    delete messagesDelete[messageId];
    expect(reducer(initialState, {
      type: types.DELETE_MESSAGE,
      id: messageId 
    })).toEqual({
      ...initialState,
      items: messagesDelete
    });
  });
});