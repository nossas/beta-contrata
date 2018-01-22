import messages from '../messages'

export default function () {

  const messageKey = Object.keys(messages);
    
    const messageList = messageKey.map((msg, id, key) => {

      return[
        {
          message: messages[msg],
          key: msg,
          id
        } 
        
      ]
    })
    
    return messageList;

}