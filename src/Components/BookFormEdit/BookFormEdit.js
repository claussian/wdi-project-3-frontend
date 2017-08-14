//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import thunks
import {updateBookNoPic, updateBookWithPic} from '../../Actions/bookActions';
import {triggerNotification, closeNotification} from '../../Actions/appActions';
import {deleteBook} from '../../Actions/bookActions';

//Importing static assets (i.e. stylesheets, images)
import './BookFormEdit.css';

console.log("Start of Component BookFormEdit.js.");

class BookFormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: "",
        author: "",
        genre:"Learning & Development",
        review:""
      },
      image: null,
      count:0
    }
  }

  componentWillReceiveProps(){
    this.setState({
      book: {},
      count: 0
    });
  }

  onChange = (e) => {
    if (this.state.count < 1) {
      let book = {...this.props.currentBook};
      // book[e.target.name] = e.target.value
      this.setState({
        book: book,
        count: 1
      });
      console.log("initial state onchange", this.state)
    }
    else {
      let book = this.state.book;
      if (e.target.files) {
        console.log("image detected")
        this.setState({
          image: e.target.files[0]
        });
        console.log('state within image uplod', this.state);
      }
      book[e.target.name] = e.target.value
      this.setState({
        book: book
      });
      console.log("onchange state", this.state.book)
      console.log('state image', this.state);
    }

  }

  updateOnClick = (e) => {
    e.preventDefault();
    if(!this.state.book.title && this.state.book.release != 'Yes') {
      this.props.updateBookNoPic(this.props.currentBook);
    }
    if(!this.state.image){
        console.log("Fire update with no pic");
        console.log(this.state.book);
        this.props.updateBookNoPic(this.state.book);

      }else{
        console.log("Fire update with pic")
        this.props.updateBookWithPic(this.state.image,this.state.book);
      }
  }

  deleteOnClick = (e) => {
    e.preventDefault();
    console.log("Fire delete");
    this.props.deleteBook(this.props.currentBook);
  }

  render() {

    console.log("BookFormEdit currentBook",this.state.book);

    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <div className="form-group">
          <div className="row">
            <div className="col-lg-8">
              <h2>Update Your Book</h2>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-default switch-post-btn" onClick={this.props.activatePost}>Post a book instead</button>
            </div>
          </div>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input name="title"
                   className="form-control"
                   placeholder = {this.props.currentBook.title}
                   value={this.state.book.title ? this.state.book.title : ""}
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input name="author"
                   className="form-control"
                   placeholder = {this.props.currentBook.author}
                   value={this.state.book.author ? this.state.book.author : ""}
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control"
                    name="genre"
                    value={this.state.book.genre ? this.state.book.genre : this.props.currentBook.genre}
                    onChange={this.onChange}>
              <option>Learning & Development</option>
              <option>Romance</option>
              <option>Popular Science</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your review</label>
            <textarea name="review"
                      className="form-control"
                      rows="3"
                      placeholder = {this.props.currentBook.review}
                      value={this.state.book.review ? this.state.book.review : ""}
                      onChange={this.onChange}></textarea>
          </div>
          <div className="form-group">
          {this.props.currentBook.reserved ?
          <div className="well book-form-release-well">
            <div className="container">
            <div className="row">
            <h4>User @{this.props.currentBook.reservedBy.username} has reserved this title. Would you like to release it?</h4>
            </div>
            <div className="row">
            <div className="dropdown book-form-release-btn">
              <select className="form-control" aria-labelledby="dropdownMenu1" name="release" onChange={this.onChange}>
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
              <button type="submit" className="btn btn-default update-book-btn" onClick={this.updateOnClick}>Update</button>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="submit" className="btn btn-default delete-book-btn"onClick={this.deleteOnClick}>Delete</button>
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
    updateBookNoPic: (book) => {dispatch(updateBookNoPic(book)); },
    updateBookWithPic: (image, book) => {dispatch(updateBookWithPic(image, book)); },
    deleteBook: (book) => {dispatch(deleteBook(book))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFormEdit);
