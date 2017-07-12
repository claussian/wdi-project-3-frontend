const bookReducer = (state = [], action) => {

  // console.log(action);

  switch (action.type) {
    case "CREATE_BOOK":
      return action.book 
      break;
    case "LOAD_BOOKS":
      return action.books || [];
      break;
    case "LOAD_SHARED_BOOKS":
      return action.books || [];
    case "RESERVE_BOOK":
      break;
    case "DELETE_BOOK":
      break;
    default:
        return state;
  }
}

export default bookReducer;
