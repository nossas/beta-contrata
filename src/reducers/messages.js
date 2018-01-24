import messages from '../messages';

const arrangeMessages = messages => {
  const messageKey = Object.keys(messages);

  return messageKey.map((key, id) => ({
    key,
    id: ++id,
    message: messages[key]
  }));

};                                                                                                                                        

//const test =                                                                                                                                                    arrangeMessages(messages)
//console.log(test.filter(msg => msg.id === 1))
//console.log(Object.values(state))

const INITIAL_STATE = {
  list: arrangeMessages(messages),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DELETE_MESSAGE':
    return {
      ...state,
      list: state.list.filter(msg => msg.id !== action.id)
    }
    
    default:
      return state;
  }
};
