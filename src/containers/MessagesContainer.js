import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Message from '../components/Message';

const MessagesContainer = ({ messages }) => (
  <ul>
    {console.log(messages)}
    {messages.map(msg =>
      <Message key={msg.id}>
        {msg.message}
      </Message>
    )}
  </ul>
);

const mapStateToProps = ({ messages }) => {
  return { messages: messages.list };
};


export default connect(mapStateToProps)(MessagesContainer);