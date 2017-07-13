//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creators and thunks
import {triggerNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './Gallery.css';

//Importing React Components
import Book from '../Book/Book';

console.log("Start of Component Gallery.js.");

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      change: false
    }
  }

  whichMessage = (latestAction) => {
    switch (latestAction.type) {
      case "CREATE_BOOK_ACTION":
        break;
      case "RESERVE_BOOK_ACTION":
        let newBook = latestAction.book;
        return "You have placed a reservation for '" + newBook.title + "'. Kindly contact @" + newBook.owner.username + " at " + newBook.owner.email;
        break;
      case "EDIT_BOOK_ACTION":
        break;
      case "DELETE_BOOK_ACTION":
        break;
      default:
          return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.latestAction != nextProps.latestAction){
      this.props.triggerNotification(this.whichMessage(nextProps.latestAction));
    }
  }

  render() {
    const initBooks = (books, searchTerm) => {
      if(books.length === 0) {
        return (
            <div className="col-md-11 col-sm-10 col-xs-8" id="empty-gallery-msg">
              <h4>
                “It was not the feeling of completeness I so needed, but the feeling of not being empty.”
              </h4>
              <h5>
                Jonathan Safran Foer, <i>Everything Is Illuminated</i>
              </h5>
              <h3>No books with the search term -- " {this.props.searchTerm} "</h3>
            </div>
        )
      };
    };

    const renderBooks = (books, searchTerm) => {

      console.log('In Gallery.js, we have just begun filtering the books accordingly. We attempt to search: ', searchTerm, 'in the books: ', books);

      console.log("Is there a search term? > undefined? ", searchTerm === undefined, ' // >null?',searchTerm === null, ' // > ""', searchTerm === "");

      if(searchTerm) {

        /*This filters the books according to keyup searchTerm*/
        console.log('searchTerm = ', searchTerm);
        books = books.filter((book) => {

          // console.log('book.title = ', book.title);
          /*This filters the books according to keyup searchTerm*/
          return book.title.toLowerCase().includes(searchTerm.toLowerCase());
          });

        // return books.map( (book) => {
        //   return (
        //     <Book id={book._id} key={book._id} contents={book}/>
        //   )
        // });
      };

      /*This common returns maps the Books according to keyup searchTerm*/
      return books.map( (book) => {
        return (
          <Book id={book._id} key={book._id} contents={book}/>
        )
      });
    };

    return (
      <div class="container">
        <hr/>
        <h1 id="gallery-header">The Bookshelf</h1>
        <div className="row" id="gallery">
          {initBooks(this.props.books,this.props.searchTerm)}
          {renderBooks(this.props.books,this.props.searchTerm)}
        </div>
      </div>
    );
  }
};

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    books: state.books,
    user: state.user,
    searchTerm: state.searches.searchTerm,
    latestAction: state.latestAction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerNotification: (message) => {dispatch(triggerNotification(message)); }
  }
}

console.log("End of Component Gallery.js.");

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
