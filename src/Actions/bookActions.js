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
        console.error("AJAX: Could not execute getBooks @ '/api/book'");
        //console.log(error);
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
          dispatch(reserveBookAction(book));
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

export const getCurrentBook = (id) => {
  return {
    type: "GET_CURRENT_BOOK",
    id
  }
}
