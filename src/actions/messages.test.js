import * as actions from './messages';
import * as types from '../constants/messages';

describe('actions', () => {
  it('should create an action to set current message', () => {
    const id = 'EMOJI_NO_OPINION';
    const expectedAction = {
      type: types.SET_CURRENT_MESSAGE,
      id
    }
    expect(actions.setCurrentMessage(id)).toEqual(expectedAction);
  })
  
  it('should create an action to edit key and message', () => {
    const data = {
      oldKey: 'HASHTAG_IM_NOT_OBLIGATED',
      key: 'IM_NOT_OBLIGATED',
      message: 'Não Sou Obrigada!'
    }
    const expectedAction = {
      type: types.EDIT_MESSAGE,
      data
    }
    expect(actions.editMessage(data)).toEqual(expectedAction);
  })

})