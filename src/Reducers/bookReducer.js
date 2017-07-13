const bookReducer = (state = [], actions) => {

  // console.log(action);

  switch (actions.type) {
    case "CREATE_BOOK":
      return [
        ...state,
        actions.book
      ]
      break;
    case "LOAD_BOOKS":
      return actions.books || [];
      break;
    case "RESERVE_BOOK":
      break;
    case "DELETE_BOOK":
      break;
    default:
        return state;
  }
}

export default bookReducer;
