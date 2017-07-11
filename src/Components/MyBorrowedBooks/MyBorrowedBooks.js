//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './MyBorrowedBooks.css';

console.log("Start of Component MyBorrowedBooks.js.");

class MyBorrowedBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron search-form">
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
        </header>
      </div>
    );
  }
}

console.log("End of Component MyBorrowedBooks.js.");

export default MyBorrowedBooks;
