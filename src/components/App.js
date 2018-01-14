import React from 'react'
import Search from '../containers/Search'
import VisibleMsgList from '../containers/VisibleMsgList'

const App = () => (
    <div>
        <h1>Beta messages</h1>
        <Search />
        <VisibleMsgList />
    </div>
)

export default App