import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message';

const MessageList = ({ messages }) => (
    <ul>
        {messages.map((msg, index) =>
            <Message
                key={index}
                {...msg}
            />
        )}
    </ul>
)

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default MessageList
