import React, { Component } from 'react';

import MessagesContainer from '../containers/MessagesContainer'
import Header from './Header'
import MessageSearch from './MessageSearch'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <MessageSearch />
        <MessagesContainer />
      </div>
    );
  }
}

export default App;