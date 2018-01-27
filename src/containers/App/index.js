import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as messageActions from '../../actions/messages';

import Card from '../../components/card';
import MessageForm from '../../components/messageform';
import Search from '../../components/search';
import Header from '../../components/header';

class App extends React.Component {
  constructor() {
    super();
  }
  
  removeMessage = event => {
    const id = event.target.dataset.message_id;
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

  searchMessage = (term) => {
    term.length >= 0
      ? this.props.messageAction.searchMessage(term)
      : this.props.messageAction.clearSearch();
  }
 
  listMessages = () => {
    const messages = this.props.messages.items;
    const currentItem = this.props.messages.currentItem;
    return Object.keys(messages).map((key, index) => {
      return (
        <div key={index}>
          {currentItem != key ? (
            <Card item={this.props.messages.items[key]}
            id={key}
            setCurrentMessage={this.setCurrentMessage}
            removeMessage={this.removeMessage} />
          ) : null}
  
          {currentItem == key ? (
            <MessageForm
              message={messages[currentItem]}
              id={currentItem}
              handleSubmit={this.onEdit} />
          ) : null}
        </div>
      );
    });
  }
  
  render() {
    const { currentItem, items } = this.props.messages;
    return (
      <div className="container">
        <Header />
        <Search searchMessage={this.searchMessage} className="search-message" />
        <div className="content-message">
          {this.listMessages()}
        </div>  
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