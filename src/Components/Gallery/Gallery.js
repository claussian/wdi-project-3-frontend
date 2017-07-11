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
          {/*  /*Book components get generated below via axios.
            <Book title="A Medium Book Title" author="Author McAuthor"/>
            <Book title="Book!" author="A. A. Auth"/>
            <Book title="A Very Super Long Book Title Hot Damn!" author="The Author With A Really Long Name"/>
            <Book title="Bk" author="Abo Ok"/>
            <Book title="A Fairly Alright Book" author="Apret Tymed Iumname"/>
            <Book title="The Longest Book In The History of the World And Its Still Going And Going" author="Anincrediblylong Nameanditsstillgoing Andgoingandgoingand going"/>
            <Book title="Book!" author="A. A. Auth"/>
            <Book title="Book!" author="A. A. Auth"/>
            <Book title="Book!" author="A. A. Auth"/>
            Book components get generated above via axios.
          </div> */}
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
