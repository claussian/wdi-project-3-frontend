//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './BookFormEdit.css';

console.log("Start of Component BookFormEdit.js.");

class BookFormEdit extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   book: {}
    // }
  }

  componentWillMount() {
  //   const initialProps = (books, currentBookId) => {
  //     // console.log(books);
  //     // console.log(currentBookId);
  //     let newbook = books.filter( (book) => {
  //       return book._id == currentBookId;
  //     });
  //     // console.log("newbook", newbook[0]);
  //     // console.log("this.state.book", this.state.book)
  //     if(!this.state.book.title) {
  //       console.log("inside initialProps!")
  //       this.setState({
  //       book: newbook[0]
  //     });
  //   }
  // }
  //   initialProps(this.props.books, this.props.currentBook);
  //   console.log("initialProps",this.state.book)
  }

  componentWillReceiveProps(nextProps) {
    // console.log("componentWillUpdate called");
    // if(this.state.book != nextProps.currentBookObj) {
    //   const newbook = nextProps.currentBookObj;
    //   console.log("inside nextProps.currentBookObj",newbook);
    //   //this.state.book = newbook;
    //   this.setState ({
    //     book: newbook
    //   });
    //   // this.setState(state);
    //   console.log("updatedstate", this.state.book);
    // }
  }

  // helper function to render selected
  //  initialProps = (books, currentBookId) => {
  //   // console.log(books);
  //   // console.log(currentBookId);
  //   let newbook = books.filter( (book) => {
  //     return book._id == currentBookId;
  //   });
  //   // console.log("newbook", newbook[0]);
  //   // console.log("this.state.book", this.state.book)
  //   if(!this.state.book.title) {
  //     console.log("inside!")
  //     this.setState({
  //     book: newbook[0]
  //   });
  // }
  //   console.log("initialProps", this.state.book);
  //}

  componentDidMount() {
    // this.initialProps(this.props.books,this.props.currentBook);
  }

  render() {

    console.log("BookFormEdit currentBook",this.props.currentBook);

    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <div className="form-group">
          <div className="row">
            <div className="col-lg-8">
              <h2>Update A Book</h2>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-default switch-post-btn" onClick={this.props.activatePost}>Post a book instead</button>
            </div>
          </div>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input name="title" className="form-control" value={this.props.currentBook.title}/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input name="author" className="form-control" value={this.props.currentBook.author}/>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control" name="genre" value={this.props.currentBook.genre}>
              <option>Learning & Development</option>
              <option>Romance</option>
              <option>Popular Science</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your review</label>
            <textarea name="review" className="form-control" rows="3" value={this.props.currentBook.review}></textarea>
          </div>
          <div className="form-group">
          {this.props.currentBook.reserved ?
          <div className="well book-form-release-well">
            <div className="container">
            <div className="row">
            <h4>User @xxx has reserved this title. Would you like to release it?</h4>
            </div>
            <div className="row">
            <div className="dropdown book-form-release-btn">
              <select className="form-control" aria-labelledby="dropdownMenu1" name="release">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            </div>
            </div>
          </div>: null}
          </div>
          <div className="form-group">
            <label>Upload book cover</label>
            <input className="upload-book-cover-file" type="file" />
            <label className="help-block">You should only upload jpg, png files. - Cloudinary</label>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="submit" className="btn btn-default update-book-btn">Update</button>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="submit" className="btn btn-default delete-book-btn">Delete</button>
            </div>
          </div>

        </form>
        </header>
      </div>
    );
  }
}

console.log("End of Component BookFormEdit.js.");

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    currentBook: state.currentBook,
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFormEdit);
