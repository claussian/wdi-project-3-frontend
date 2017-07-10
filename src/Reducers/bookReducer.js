const bookReducer = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_BOOK":
      console.log("create book action");;
      break;
    case "READ_BOOK":
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
