// filter msg: receive the text from the search input 
export const filterMsg = (filterText) => ({
    type: 'FILTER_TEXT',
    filterText
})

//edit msg: receive the key and value from the editMsg form
export const editMsg = (key, text) => ({
    type: 'EDIT_MSG',
    key,
    text
})