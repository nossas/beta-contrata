import React, { Component } from 'react';

import MessagesContainer from '../containers/MessagesContainer'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MessagesContainer />
      </div>
    );
  }
}

export default App;