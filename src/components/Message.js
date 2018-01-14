import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text }) => (
    //text + link to edit(open the edit form) edit can be a bool => if edit = true call the <EditMsg />
    <li>
        {text}
    </li>
)

Message.propTypes = {
    //onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }
  
  export default Message
  