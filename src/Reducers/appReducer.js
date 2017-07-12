const appReducer = (state = "", action) => {

  //console.log(action);

  switch (action.type) {
    case "TRIGGER_NOTIFICATION":
      return action.message || "";
      break;
    case "CLOSE_NOTIFICATION":
      return "";
    default:
        return state;
  }
}


export default appReducer;
