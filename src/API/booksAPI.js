/* Search within Gallery */
let searchBooks = (searchTerm, books) => {
  console.log('In Gallery.js, we have just begun filtering the todos accordingly. We have passed searchTerm as ', searchTerm, 'and books as ', books);

  if(searchTerm !== "") {
    books = books.filter((book) => {
      return book.text.toLowerCase().includes(searchTerm.toLowerCase());
      });
  };
  return books;
};
