import axios from 'axios';

// Add a book into the array of books
export const addBook = (image, book) => {
  console.log('book', book)
  return (dispatch) => {

    let addBookToBackEnd = new FormData();
    console.log('book', book)
    addBookToBackEnd.append('book.cover', image);
    addBookToBackEnd.append('book.title', book.title);
    addBookToBackEnd.append('book.author', book.author);
    addBookToBackEnd.append('book.genre', book.genre);
    addBookToBackEnd.append('book.review', book.review);

    axios.post('/api/book', addBookToBackEnd)
      .then( (response) => {
        dispatch(createBook(response.data))
      })
      .catch((error) =>{
        console.error("AJAX: Could not create book @ '/api/book'");
        console.log(error);
      })
  }
}

export const createBook = (book) => {
  return {
    type: "CREATE_BOOK",
    book
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

const loadBooks = (books) => {
  return {
    type: "LOAD_BOOKS",
    books
  }
}

export const getBorrowedBooks = () => {
  return (dispatch) => {
    axios.get('/api/borrowed')
      .then( (response) => {
        const borrowedBooks = response.data;
        console.log("borrowedBooks are ", response.data);
        dispatch(loadBorrowedBooks(borrowedBooks));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get borrowed books @ '/api/borrowed'");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

const loadBorrowedBooks = (borrowedBooks) => {
  return {
    type: "LOAD_BORROWED_BOOKS",
    borrowedBooks
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

const loadSharedBooks = (sharedBooks) => {
  return {
    type: "LOAD_SHARED_BOOKS",
    sharedBooks
  }
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

export const getBook = (id, reserve) => {
  return (dispatch) => {
    axios.get('/api/book/' + id)
      .then( (response) => {
        const book = response.data;
        if(reserve) {
          dispatch(reserveBookAction(book))
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not get book @ '/api/book/'" + id);
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

const reserveBookAction = (book) => {
  return {
    type: "RESERVE_BOOK_ACTION",
    book
  }
}
