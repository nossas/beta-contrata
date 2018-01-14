// filter msg: receive the text from the search input 
export const filterMsg = (filterText) => ({
    type: 'FILTER_TEXT',
    filterText
})

//edit msg: receive the key and value from the editMsg form
export const editMsg = (id, chave, text, editing) => ({
    type: 'EDIT_MSG',
    id,
    chave,
    text, 
    editing
})

export const changeEditing = (id) => ({
    type: 'CHANGE_EDITING', 
    id
})