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

    const renderBooks = (books) => {
        if(books.length === 0) {
          return (
              <div className="col-md-11 col-sm-10 col-xs-8">
                <h4 className="card-title">Nothing to do. Have a Covfefe</h4>
              </div>
          )
        }
        return books.map( (book) => {
          return (
            <Book id={book._id} key={book._id} contents={book}/>
          )
        });
      }

    return (
      <div class="container">
        <hr/>
        <h1 id="gallery-header">The Bookshelf</h1>
        <div className="row" id="gallery">
          {renderBooks(this.props.books)}
      </div>
    </div>
    );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    books: state.books,
    user: state.user,
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
