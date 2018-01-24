import messages from '../messages';

const arrangeMessages = messages => {
  const messageKey = Object.keys(messages);
  return messageKey.map((key, id) => ({
    id,
    key,
    message: messages[key],
  }));
};

const INITIAL_STATE = {
  list: arrangeMessages(messages),
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'message-edited':
      return { ...state };

    default:
      return state;
  }
};
