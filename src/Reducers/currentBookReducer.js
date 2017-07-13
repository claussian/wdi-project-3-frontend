const currentBookReducer = (state = {}, action) => {

  //console.log(action);

  switch (action.type) {
    case "GET_CURRENT_BOOK":
      return action.currentBook || {};
      break;
    default:
        return state;
  }
}


export default currentBookReducer;
