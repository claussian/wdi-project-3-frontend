export const searchTerm = (text) => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    text
  }
};

export const searchBorrowedTerm = (text) => {
  return {
    type: 'UPDATE_BORROWED_SEARCH_TERM',
    text
  }
}

export const searchSharedTerm = (text) => {
  return {
    type: 'UPDATE_SHARED_SEARCH_TERM',
    text
  }
}
