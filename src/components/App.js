import React, { Component } from 'react';

import MessagesContainer from '../containers/MessagesContainer'
import Header from './Header'
import MessageSearch from './MessageSearch'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <MessageSearch />
        <MessagesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;