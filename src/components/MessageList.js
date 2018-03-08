import React from 'react'
import {ListGroup} from 'reactstrap'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages }) => (
    <ListGroup >
        {messages.map((msg, index) =>
            <Message
                key={index}
                {...msg}
            />
        )}
    </ListGroup >
)

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        chave: PropTypes.string.isRequired, //OBS
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default MessageList
