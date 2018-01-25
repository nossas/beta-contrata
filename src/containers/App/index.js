import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../actions/messages';

import Card from '../../components/card';
import MessageForm from '../../components/messageform';

class App extends React.Component {
  constructor() {
    super();
  }
  
  removeMessage = event => {
    const id = event.target.dataset.id;
    this.props.messageAction.deleteMessage(id);
  }

  /*
   * Note: the Data(messages object) don't have `id`, 
   * so the `key` was used as the `id` of the message. 
   * sometimes `key` is called `id` in this project.
   * 
   */ 
  onEdit = (oldKey, key, message) => {
    const data = { oldKey, key, message };
    this.props.messageAction.editMessage(data);
    this.props.messageAction.setCurrentMessage(null);
  }

  setCurrentMessage = event => {
    const id = event.target.dataset.message_id;
    this.props.messageAction.setCurrentMessage(id);
  }
 
  listMessages = () => {
    const messages = this.props.messages.items;
    return Object.keys(messages).map((key, index) => {
      return (
        <div key={index}>
          <Card item={this.props.messages.items[key]}
                id={key}
                setCurrentMessage={this.setCurrentMessage} />
        </div>
      );
    });
  }
  
  render() {
    const { currentItem, items } = this.props.messages;
    return (
      <div>
        {this.listMessages()}
        {currentItem 
          ? <MessageForm
              message={items[currentItem]}
              id={currentItem}
              handleSubmit={this.onEdit} />
          : null}
      </div>
    );
  };
} 

const mapStateToProps = ({ messages }) => {
  return {
    messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    messageAction: bindActionCreators(messageActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);