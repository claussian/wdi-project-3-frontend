const bookSharedReducer = (state = [], action) => {

  // console.log(action);

  switch (action.type) {
    case "LOAD_SHARED_BOOKS":
      return action.sharedBooks || [];
      break;
    default:
        return state;
  }
}

export default bookSharedReducer;
