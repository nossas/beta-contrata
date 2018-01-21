import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../actions/message';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeMessage = this.removeMessage.bind(this);
  }

  removeMessage(event) {
    const id = event.target.dataset.id;
    this.props.messageAction.deleteMessage(id);
  }

  render() {
    return (
      <div>
        <button onClick={this.removeMessage} data-id="2">{'Click'}</button>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    message: state.message
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