const bookBorrowedReducer = (state = [], action) => {

  // console.log(action);

  switch (action.type) {
    case "LOAD_BORROWED_BOOKS":
      console.log('action.borrowedBooks = ', action.borrowedBooks);
      return action.borrowedBooks || [];
      break;
    default:
      return state;
  }
}

export default bookBorrowedReducer;
