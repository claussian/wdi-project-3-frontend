//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './MySharedBooks.css';

//Importing React Components
import MyBookListItem from '../MyBookListItem/MyBookListItem';

console.log("Start of Component MySharedBooks.js.");

class MySharedBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron my-shared-books">
          <h2>My Shared Books</h2>
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="Search my shared books" />
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
          </div>
          <div className='row'>
            <MyBookListItem id="id" title="Hello World" author="Hello Hello" genre="Genre" ownerusername="tiffany" review="a review goes here" reservedBy="hanif"/>
            <MyBookListItem id="id" title="Hello World" author="Hello Hello" genre="Genre" ownerusername="tiffany" review="a review goes here" reservedBy="hanif"/>
            <MyBookListItem id="id" title="Hello World" author="Hello Hello" genre="Genre" ownerusername="tiffany" review="a review goes here" reservedBy="hanif"/>
          </div>
        </header>
      </div>
    );
  }
}

console.log("End of Component MySharedBooks.js.");

export default MySharedBooks;
