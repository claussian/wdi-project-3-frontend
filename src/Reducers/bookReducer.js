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
    return state.map( (book) => {
      let newbook;
      if(book._id == actions.book._id) {
        console.log("found book to reserve in RESERVE_BOOK")
        console.log(actions.book);
        newbook = actions.book;
      }
      else{
        newbook = {...book}
      }
      return newbook;
    });
      break;
    case "UPDATE_BOOK":
      return state.map( (book) => {
        let newbook;
        if(book._id == actions.book._id) {
          console.log("found book to update in UPDATE_BOOK")
          console.log(actions.book);
          newbook = actions.book;
        }
        else{
          newbook = {...book}
        }
        return newbook;
      });
      break;
    case "DELETE_BOOK":
      break;
    default:
        return state;
  }
}

export default bookReducer;
