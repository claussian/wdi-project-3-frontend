//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

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
            <MyBookListItem id={book._id} key={book._id} contents={book}/>
          )
        });
      }

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
            {renderBooks(this.props.sharedBooks)}
          </div>
        </header>
      </div>
    );
  }
}

console.log("End of Component MySharedBooks.js.");

const mapStateToProps = (state) => {
  return {
    sharedBooks: state.sharedBooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySharedBooks);
