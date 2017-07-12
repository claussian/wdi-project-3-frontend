//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBook} from '../../Actions/bookActions'
//Importing static assets (i.e. stylesheets, images)
import './BookForm.css';

console.log("Start of Component BookForm.js.");

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      image: ""
    }
}

onChange = (e) => {
  let key = e.target.name
  let value = e.target.value
  //let pic = e.target.id
  let state = this.state
  //console.log(e.target.files[0])
  // console.log('key :', key, 'value: ', value)
  let image
    if (e.target.files) {
      console.log("image detected")
      image = e.target.files[0]
      state.image = image
      this.setState(state)
      console.log('state within image upload', this.state)
    }
  this.setState({
    book: {
      ...this.state.book,
      [key]: value
    }
  })
  console.log('state image', this.state)
}

onClick = (e) => {
  e.preventDefault()
  console.log("submitting", this.state.book)
  console.log('image', this.state.image)
  this.props.addBook(this.state.image, this.state.book)
}

  render() {
    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <h2>Post / Update A Book</h2>
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
              <option>Science Fiction</option>
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
            <label>Upload book cover</label>
            <input className="upload-book-cover-file" type="file" id="image" onChange={this.onChange}/>
            <label className="help-block">You should only upload jpg, png files. - Cloudinary</label>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="button" className="btn btn-default post-book-btn" onClick={this.onClick}>Post</button>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="button" className="btn btn-default update-book-btn">Update</button>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="button" className="btn btn-default delete-book-btn">Delete</button>
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
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (image, book) => {dispatch(addBook(image, book))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
