import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../actions/message';

import Card from '../../components/card';
import { messages } from '../../../data/messages';

class App extends React.Component {
  
  removeMessage = event => {
    const id = event.target.dataset.id;
    this.props.messageAction.deleteMessage(id);
  }
 
  listMessages = () => {
    return Object.keys(messages).map(key => {
      return (
        <div key={key}>
          <Card message={messages[key]} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.listMessages()}
        <button onClick={this.removeMessage} data-id="2">{'Click'}</button>
      </div>
    );
  };
} 

const mapStateToProps = ({ message }) => {
  return {
    message
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