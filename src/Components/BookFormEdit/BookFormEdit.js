//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './BookFormEdit.css';

console.log("Start of Component BookFormEdit.js.");

class BookFormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      image: ""
    }
  }

  onChange = (e) => {

    if (e.target.files) {
      console.log("image detected")
      this.setState({
        image: e.target.files[0]
      });
      console.log('state within image upload', this.state);
    }
    let book = this.state.book;
    book[e.target.name] = e.target.value
    this.setState({
      book: book
    });
    console.log('state image', this.state);
  }

  onClick = (e) => {
    e.preventDefault();

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
              <h2>Update Your Book</h2>
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
            <h4>User @{this.props.currentBook.reservedBy.usename} has reserved this title. Would you like to release it?</h4>
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
              <button type="submit" className="btn btn-default update-book-btn" onClick={this.onClick}>Update</button>
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
