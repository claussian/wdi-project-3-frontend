//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creators and thunks
import {triggerNotification, closeNotification} from '../../Actions/appActions';
import {addBook} from '../../Actions/bookActions';

//Importing static assets (i.e. stylesheets, images)
import './BookForm.css';

console.log("Start of Component BookForm.js.");

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: "",
        author: "",
        genre:"Learning & Development",
        review:""
      },
      image: "",
    }
}

whichMessage = (latestAction) => {
  switch (latestAction.type) {
    case "CREATE_BOOK_ACTION":
      let createBook = latestAction.book;
      //console.log("You have successfully uploaded '" + createBook.title + "' by " + createBook.author);
      return "You have successfully uploaded '" + createBook.title + "' by " + createBook.author;
      break;
    default:
        return "";
  }
};

componentWillReceiveProps(nextProps) {
  if(this.props.latestAction != nextProps.latestAction){
    console.log('this.props.latestAction != nextProps.latestAction is ', this.props.latestAction, nextProps.latestAction);
    this.props.triggerNotification(this.whichMessage(nextProps.latestAction));

  }
}

onChange = (e) => {

    if (e.target.files) {
      console.log("image detected")
      this.setState({
        image: e.target.files[0]
      })
      console.log('state within image upload', this.state)
    }
    let book = this.state.book;
    book[e.target.name] = e.target.value
  this.setState({
    book: book
  })
  console.log('state image', this.state)
}

onClick = (e) => {
  e.preventDefault();
  console.log("submitting", this.state.book);
  console.log('image', this.state.image);
  this.props.addBook(this.state.image, this.state.book);

  if (!this.state.book) { // book failed to pass to state
    this.props.triggerNotification("Book upload failed. Try again?");
  }
}

  render() {
    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <h2>Post A Book</h2>
          <div className="form-group">
            <label>Title</label>
            <input type="title"
                   className="form-control"
                   placeholder="Title"
                   value={this.state.title}
                   name="title"
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="author"
                   className="form-control"
                   placeholder="Author"
                   value={this.state.author}
                   name="author"
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control"
                    value={this.state.genre}
                    name="genre"
                    onChange={this.onChange}>
              <option>Learning & Development</option>
              <option>Romance</option>
              <option>Popular Science</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your review</label>
            <textarea className="form-control"
                      rows="3"
                      placeholder="Reviews are for readers, not writers. If I get a bad one, I shrug it off. If I get a good one, I don't believe it. ~ William Meikle"
                      value={this.state.review}
                      name="review"
                      onChange={this.onChange}></textarea>
          </div>

          <div className="form-group">
          {this.state.reserved ?
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
            <input  className="upload-book-cover-file"
                    type="file"
                    name="image"
                    onChange={this.onChange}/>
            <label className="help-block">You should only upload jpg, png files. - Cloudinary</label>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="button"
                      className="btn btn-default post-book-btn" onClick={this.onClick}>Post</button>
            </div>
          </div>
        </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
    latestAction: state.latestAction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (image, book) => {dispatch(addBook(image, book))},
    triggerNotification: (message) => {dispatch(triggerNotification(message)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
