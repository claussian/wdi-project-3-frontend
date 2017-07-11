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
        console.error("AJAX: Could not get books @ '/api/book'")
        dispatch(loadBooks({}));
      });
  };
}

export const reserveBook = (id) => {
  return (dispatch) => {
    axios.put('/api/reserve/'+ id)
      .then( (response) => {
        const books = response.data;
        dispatch(loadBooks(books));
      })
      .catch((error)=> {
        console.error("AJAX: Could not reserve book'")
        dispatch(loadBooks({}));
      });
  }

}
