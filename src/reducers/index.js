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
            return [
                ...state,
                {
                    key: action.key,
                    text: action.text
                }
            ]
        default:
            return state
    }
}

const msgApp = combineReducers({
    filterText,
    messages
})

export default msgApp
