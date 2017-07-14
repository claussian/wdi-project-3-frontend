const userReducer = (state = {}, action) => {

  console.log(action);

  switch (action.type) {
    case "USER_UPDATE":
        return action.user || {};
    case "UPDATE_USER_OWNED":
        let newstate = {...state};
        newstate.booksOwned.push(action.id);
        return newstate;
    case "UPDATE_USER_BORROWED":
        let rrstate = {...state};
        rrstate.booksBorrowed.push(action.id);
        return rrstate;
    default:
        return state;
  }
}


export default userReducer;
