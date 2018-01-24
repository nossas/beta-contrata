import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Message from '../components/Message';
import * as Actions from '../actions';

const MessagesContainer = ({ messages, deleteMessage }) => (
  <ul>
    { messages.map(msg =>
      <Message 
        key={ msg.id } 
        onDeleteClick={ () => deleteMessage(msg.id) }
      >
        { msg.message }
      </Message>
    ) }
  </ul>
);

const mapStateToProps = ({ messages }) => {
  return { messages: messages.list };
};

export default connect(mapStateToProps, { ...Actions })(MessagesContainer);