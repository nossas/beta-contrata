import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import messages from './messages'

const values = [];
var id = 0;
for (var key in messages) {
    id++;
    var objMsg = {};
    objMsg.chave = key;
    objMsg.text = String(messages[key]);
    objMsg.id = id;
    objMsg.editing = false;
    values.push(objMsg);
}
//console.log(values);

const initialState = {
    filterText: '',
    messages: values
};

const store = createStore(reducer, initialState)

//console.log(store.getState())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
