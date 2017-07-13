const latestActionReducer = (state = {}, action) => {

  switch (action.type) {
    case "CREATE_BOOK_ACTION":
    return action;
      break;
    case "RESERVE_BOOK_ACTION":
    return action;
      break;
    case "UPDATE_BOOK_ACTION":
    return action;
      break;
    case "DELETE_BOOK_ACTION":
      break;
    default:
      return state;
  }
}

export default latestActionReducer;
