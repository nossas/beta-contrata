import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageList extends Component {

  renderList = () => {

    const messageList = this.props.messages.map(msg => {
      return(
        <li>
          { msg[0].message }
        </li>
      )
    })
    
    return messageList;
    
  }

  render() {       
    return(
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return { messages: state.messages }
}

export default connect(mapStateToProps, null)(MessageList);