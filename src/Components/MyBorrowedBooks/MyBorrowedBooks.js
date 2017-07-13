//Importing required packages
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import action-creators and thunks
import { searchBorrowedTerm } from '../../Actions/searchActions';
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
      searchBorrowedTerm: "",
      change: false
    }
    console.log('In constructor, searchBorrowedTerm =' , searchBorrowedTerm);
  }

  onChange = (e) => {
    let searchText = e.target.value;
    this.props.changeBorrowedSearchTerm(searchText);
    this.setState({
      searchBorrowedTerm: searchText
    });
    console.log('onChange, searchBorrowedTerm:', searchBorrowedTerm);
  }

  //Populates all books that the user has borrowed

  render() {
    const renderBorrowedBooks = (books, user, searchBorrowedTerm) => {
          console.log("No. of books on Bookshelf = ", books.length)
          if(!user.booksBorrowed) {
            return (
              <div className="col-md-11 col-sm-10 col-xs-8">
                <h4 className="card-title">No books borrowed.</h4>
              </div>
            )
          } else {

            /*the search filter will only be triggered if there is a search term for borrowed books*/

            if(searchBorrowedTerm) {
              /*This filters the books according to keyup searchBorrowedTerm*/
              console.log('searchBorrowedTerm = ', searchBorrowedTerm);
              books = books.filter((book) => {
                // console.log('book.title = ', book.title);
                /*This filters the books according to keyup searchBorrowedTerm*/
                return book.title.toLowerCase().includes(searchBorrowedTerm.toLowerCase());
                });
            };

            return books.map( (book) => {
              if(user.booksBorrowed.indexOf(book._id) > -1) {
              return (
                <MyBorrowedBookItem id={book._id} key={book._id} contents={book}/>
              )
            }
          });
        };
      }

    console.log("Before return render, this.props.searchBorrowedTerm", this.props.searchBorrowedTerm);

    return (
      <div>
        <header className="jumbotron my-borrowed-books">
          <h2>My borrowed books</h2>
          <div className="search-bar">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block search-borrowed-books-btn" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>{ /* input-group-btn */ }
              <input  type="text"
                      className="search-query form-control"
                      placeholder="Search title"
                      onKeyUp={this.onChange} />
            </div>{ /* input-group */ }
          </div>{/* /search-bar */}
          <div className="row">
            {renderBorrowedBooks(this.props.books, this.props.user, this.props.searchBorrowedTerm)}
          </div>
        </header>{/* /jumbotron my-borrowed-books */}
      </div>
    );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods
// Define state within the component from the store
const mapStateToProps = (state) => {
  return {
    books: state.books,
    user: state.user,
    searchBorrowedTerm: state.searches.searchBorrowedTerm
  }
};
// Define actions within the component
const mapDispatchToProps = (dispatch) => {
  return {
    changeBorrowedSearchTerm: (text) => { dispatch(searchBorrowedTerm(text)); },
  }
}

console.log("End of Component MyBorrowedBooks.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MyBorrowedBooks);
