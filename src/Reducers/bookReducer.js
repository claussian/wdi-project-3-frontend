const bookReducer = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_BOOK":
      break;
    case "LOAD_BOOKS":
      return action.books || [];
      break;
    case "UPDATE_BOOK":
      break;
    case "DELETE_BOOK":
      break;
    default:
        return state;
  }
}


export default bookReducer;
