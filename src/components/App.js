import React from 'react'
import Search from '../containers/Search'
import VisibleMsgList from '../containers/VisibleMsgList'
import '../App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Beta messages</h1>
        </header>
        <Search />
        <VisibleMsgList />
    </div>
)

export default App