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
    case "DELETE_BOOK_IN_USER":
        let ttstate = {...state};
        let booksOwned = ttstate.booksOwned
        booksOwned.splice(booksOwned.indexOf(action.book._id),1);
        return ttstate;
    default:
        return state;
  }
}


export default userReducer;
