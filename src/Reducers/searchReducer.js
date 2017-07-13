const initialState = {
  searchTerm: "",
  searchBorrowedTerm: "",
  searchSharedTerm: ""
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.text
      }
    break;
    case 'UPDATE_BORROWED_SEARCH_TERM':
      return {
        ...state,
        searchBorrowedTerm: action.text
      }
    break;
    case 'UPDATE_SHARED_SEARCH_TERM':
      return {
        ...state,
        searchSharedTerm: action.text
      }
    break;
    default:
      return state
  }
}

export default searchReducer;
