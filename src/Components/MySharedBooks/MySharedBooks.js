//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchSharedTerm } from '../../Actions/searchActions';

//Importing static assets (i.e. stylesheets, images)
import './MySharedBooks.css';

//Importing React Components
import MySharedBookItem from '../MySharedBookItem/MySharedBookItem';

console.log("Start of Component MySharedBooks.js.");

class MySharedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSharedTerm: "",
      change: false
    }
    console.log('In constructor, searchSharedTerm =' , searchSharedTerm);
  }

  onChange = (e) => {
    let searchText = e.target.value;
    this.props.changeSharedSearchTerm(searchText);
    this.setState({
      searchSharedTerm: searchText
    });
    console.log('onChange, searchSharedTerm:', searchSharedTerm);
  }

  //Populates all books that the user has shared

  render() {
    const renderSharedBooks = (books, user, searchSharedTerm) => {
        console.log("No. of books on Bookshelf = ", books.length)
        if(!user.booksOwned) {
          return (
              <div className="col-md-11 col-sm-10 col-xs-8">
                <h4 className="card-title">No books shared.</h4>
              </div>
          )
        } else {

          /*The search filter will only be triggered if there is a search term for shared books*/

          if(searchSharedTerm) {
            /*This filters the books according to keyup searchSharedTerm*/
            console.log('searchSharedTerm = ', searchSharedTerm);
            books = books.filter((book) => {
              // console.log('book.title = ', book.title);
              /*This filters the books according to keyup searchSharedTerm*/
              return book.title.toLowerCase().includes(searchSharedTerm.toLowerCase());
              });
          };

          return books.map( (book) => {
            if(user.booksShared.indexOf(book._id) > -1) {
            return (
              <MySharedBookItem id={book._id} key={book._id} contents={book}/>
            )
          }
        });
      };
    };

    console.log("Before return render, this.props.searchSharedTerm", this.props.searchSharedTerm);

    return (
      <div>
        <header className="jumbotron my-shared-books">
          <h2>My shared books</h2>
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="Search my shared books" />
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>{/* /input-group-btn */}
            </div>{/* /input-group */}
          </div>{/* /search-bar */}
          <div className='row'>
            {renderSharedBooks(this.props.books, this.props.user, this.props.searchSharedTerm)}
          </div>
        </header>{/* /jumbotron my-shared-books */}
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
    searchSharedTerm: state.searches.searchSharedTerm
  }
}
// Define actions within the component
const mapDispatchToProps = (dispatch) => {
  return {
    changeSharedSearchTerm: (text) => {
      dispatch(searchSharedTerm(text)); },
  }
}

console.log("End of Component MySharedBooks.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MySharedBooks);
