import { combineReducers } from 'redux'

const filterText = (state = '', action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return action.filterText
        default:
            return state
    }
}

const messages = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_MSG':
            return state.map(message =>
                (message.id === action.id)
                    ? {
                        id: action.id,
                        chave: action.chave,
                        text: action.text,
                        editing: action.editing
                    }
                    : message
            )
        case 'CHANGE_EDITING':
            return state.map(message =>
                (message.id === action.id)
                    ? { ...message, editing: !message.editing }
                    : message
            )
        default:
            return state
    }
}

const msgApp = combineReducers({
    filterText,
    messages
})

export default msgApp
