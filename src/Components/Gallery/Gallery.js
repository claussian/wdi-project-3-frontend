//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './Gallery.css';

//Importing React Components
import Book from '../Book/Book';

console.log("Start of Component Gallery.js.");

class Gallery extends Component {

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
            <Book id={book._id} key={book._id} contents={book}/>
          )
        });
      }

    return (
      <div class="container">
        <hr/>
        <h1 id="gallery-header">The Bookshelf</h1>
        <div className="row" id="gallery">
          {renderBooks(this.props.library)}
      </div>
    </div>
    );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    library: state.books
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     completeTodo: (id, completed) => {dispatch(completeTodo(id, completed)); }
//   }
// }

console.log("End of Component Gallery.js.");

export default connect(mapStateToProps)(Gallery);
