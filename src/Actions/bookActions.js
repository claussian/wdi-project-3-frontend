import axios from 'axios';

const loadBooks = (books) => {
  return {
    type: "LOAD_BOOKS",
    books
  }
}

export const getBooks = () => {
  return (dispatch) => {
    axios.get('/api/book')
      .then( (response) => {
        const books = response.data;
        dispatch(loadBooks(books));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get books @ '/api/book'");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

export const getBook = (id, reserve) => {
  return (dispatch) => {
    axios.get('/api/book/' + id)
      .then( (response) => {
        const book = response.data;
        if(reserve) {
          dispatch(reserveBookAction(book));
          dispatch(reserveBookUpdate(book));
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not get book @ '/api/book/'" + id);
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

export const reserveBook = (id) => {
  return (dispatch) => {
    axios.put('/api/reserve/'+ id)
      .then( (response) => {
        const book = response.data;
        //dispatch(getBooks()); // reload bookstore
        dispatch(getBook(book._id, true)); // get book info and update latestAction
      })
      .catch((error)=> {
        console.error("AJAX: Could not reserve book'");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  }
}

const reserveBookAction = (book) => {
  return {
    type: "RESERVE_BOOK_ACTION",
    book
  }
}

export const getSharedBooks = () => {
  return (dispatch) => {
    axios.get('/api/shared')
      .then( (response) => {
        const books = response.data;
        dispatch(loadSharedBooks(books));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get books @ '/api/book'");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

const loadSharedBooks = (books) => {
  return {
    type: "LOAD_SHARED_BOOKS",
    books
  }
}
