//Importing required packages
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import action-creators and thunks
import {triggerNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './MyBorrowedBooks.css';

//Importing React Components
import MyBorrowedBookItem from '../MyBorrowedBookItem/MyBorrowedBookItem';

console.log("Start of Component MyBorrowedBooks.js.");

class MyBorrowedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false
    }
  }

  render() {

    //Populates all books that the user has borrowed
    const renderBooks = (books) => {
        console.log('books.length = ', books.length);
        if(books.length === 0) {
          return (
              <div className="col-md-11 col-sm-10 col-xs-8">
                <h4 className="card-title">No books borrowed</h4>
              </div>
          )
        }
        return books.map( (book) => {
          return (
            <MyBorrowedBookItem id={book._id} key={book._id} contents={book}/>
          )
        });
      }

    return (
      <div>
        <header className="jumbotron my-borrowed-books">
          <h2>My Borrowed Books</h2>
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="MyBorrowedBooks title" />
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
          </div>
          <div className="row">
            {renderBooks(this.props.books)}
          </div>
        </header>
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
    //triggerNotification: (message) => {dispatch(triggerNotification(message)); }
  }
}

console.log("End of Component MyBorrowedBooks.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MyBorrowedBooks);
