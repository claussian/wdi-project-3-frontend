import axios from 'axios';
import {updateUserOwned, updateUserBorrowed} from './userActions';

// Add a book into the array of books
export const addBook = (image, book) => {
  console.log('book', book)
  return (dispatch) => {

    let addBookToBackEnd = new FormData();
    console.log('book', book)
    addBookToBackEnd.append('cover', image); //req.body.book.cover
    addBookToBackEnd.append('title', book.title);
    addBookToBackEnd.append('author', book.author);
    addBookToBackEnd.append('genre', book.genre);
    addBookToBackEnd.append('review', book.review);

    axios.post('/api/book', addBookToBackEnd)
      .then( (response) => {
        console.log('/api/book response.data ==', response.data)
        const book = response.data;
        dispatch(getBook(book._id, 'create'));
        dispatch(updateUserOwned(book._id));
      })
      .catch((error) =>{
        // console.error("AJAX: Could not create book @ '/api/book'");
        // console.log(error);
        dispatch(loadingBookError(error))
      })
  }
}

const notifySuccessfulCreate = (book) => {
  return {
    type: "CREATE_BOOK_ACTION",
    book
  }
}

const loadingBookError = (error) => {
  return {
    type: "LOADING_BOOK_ERROR",
    error,
  }
}

const createBookInStore = (book) => {
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
        console.error("AJAX: Could not execute getBooks @ '/api/book'");
        //console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

export const loadBooks = (books) => {
  return {
    type: "LOAD_BOOKS",
    books
  }
}

export const reserveBook = (id) => {
  return (dispatch) => {
    axios.put('/api/reserve/'+ id)
      .then( (response) => {
        const book = response.data;
        dispatch(getBook(book._id, 'reserve')); // get book info and update latestAction
        dispatch(updateUserBorrowed(book._id));
      })
      .catch((error)=> {
        console.error("AJAX: Could not reserve book");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  }
}

export const getBook = (id, actionType) => {
  return (dispatch) => {
    axios.get('/api/book/' + id)
      .then( (response) => {
        const book = response.data;
        if(actionType == 'reserve') {
          dispatch(reserveBookInStore(book));
          dispatch(reserveBookAction(book));
        }
        else if(actionType == 'create') {
          dispatch(createBookInStore(book));
          dispatch(notifySuccessfulCreate(book));
        }
        else {
          dispatch(updateBookInStore(book));
          dispatch(updateBookAction(book));
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not get book @ '/api/book/'" + id);
        console.log(error);
        // dispatch(loadBooks({}));
      });
  };
}

const reserveBookInStore = (book) => {
  return {
    type: "RESERVE_BOOK",
    book
  }
}

const reserveBookAction = (book) => {
  return {
    type: "RESERVE_BOOK_ACTION",
    book
  }
}

export const getCurrentBook = (id, books) => {
  let currentBook = books.filter( (book) => {
    return book._id == id;
  });
  //console.log("action currentBook",currentBook);

  return {
    type: "GET_CURRENT_BOOK",
    currentBook: currentBook[0]
  }
}


export const updateBookNoPic = (book) => {
  return (dispatch) => {

    axios.put('/api/booknopic/'+ book._id, book)
      .then( (response) => {
        const book = response.data;
        //dispatch(getBooks()); // reload bookstore
        dispatch(getBook(book._id, 'update')); // get book info and update latestAction
      })
      .catch((error)=> {
        console.error("AJAX: Could not update book");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  }
}

export const updateBookWithPic = (image, book) => {
  return (dispatch) => {

    let updateBookToBackEnd = new FormData();

    updateBookToBackEnd.append('cover', image);
    updateBookToBackEnd.append('title', book.title);
    updateBookToBackEnd.append('author', book.author);
    updateBookToBackEnd.append('genre', book.genre);
    updateBookToBackEnd.append('review', book.review);

    axios.put('/api/book/'+ book._id, updateBookToBackEnd)
      .then( (response) => {
        const book = response.data;
        console.log("axios complete, updated book",book);
        //dispatch(getBooks()); // reload bookstore
        dispatch(getBook(book._id, 'update')); // get book info and update latestAction
      })
      .catch((error)=> {
        console.error("AJAX: Could not update book");
        console.log(error);
        // dispatch(loadBooks({}));
      });
  }
}

const updateBookInStore = (book) => {
  return {
    type: "UPDATE_BOOK",
    book
  }
}

const updateBookAction = (book) => {
  return {
    type: "UPDATE_BOOK_ACTION",
    book
  }
}

export const deleteBook = (book) => {
  return (dispatch) => {
    console.log('/api/book/'+ book._id);
    axios.delete('/api/book/'+ book._id)
      .then( (response) => {
        console.log(response.data);
        console.log("inside book delete", book);
        dispatch(deleteBookInStore(book)); // get book info and update latestAction
        dispatch(deleteBookInUser(book));
        dispatch(deleteBookAction(book));
      })
      .catch((error)=> {
        console.error("AJAX: Could not delete book");
        console.log(error);
      });
  }
}

const deleteBookInStore = (book) => {
  return {
    type: "DELETE_BOOK",
    book
  }
}

const deleteBookInUser = (book) => {
  return {
    type: "DELETE_BOOK_IN_USER",
    book
  }
}

const deleteBookAction = (book) => {
  return {
    type: "DELETE_BOOK_ACTION",
    book
  }
}
