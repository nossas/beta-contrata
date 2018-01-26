import messages from '../messages';

const arrangeMessages = messages => {
  const messageKey = Object.keys(messages);

  return messageKey.map((key, id) => ({
    key,
    id: ++id,
    message: messages[key]
  }));

};                                                                                                                                        

const INITIAL_STATE = {
  list: arrangeMessages(messages),
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case 'DELETE_MESSAGE':
      return {
        ...state,
        list: state.list.filter(msg => msg.id !== action.payload)
      }
    
    case 'SEARCH_MESSAGE':
      console.log(action.payload)
      return {
        ...state,
        list: state.list.filter(msg => msg.message.toLowerCase().match(action.payload))
      }
    
    default:
      return state;
  }
};
