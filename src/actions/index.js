export const deleteMessage = (id) => ({
  type: 'DELETE_MESSAGE',
  payload: id
})

export const searchMessage = (searchText) => ({
  type: 'SEARCH_MESSAGE',
  payload: searchText
})