//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './BookForm.css';

console.log("Start of Component BookForm.js.");

class BookForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <h2>Post / Update A Book</h2>
          <div className="form-group">
            <label>Title</label>
            <input type="email" className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="password" className="form-control" placeholder="Author"/>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control">
              <option>Learning & Development</option>
              <option>Romance</option>
              <option>Science Fiction</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your review</label>
            <textarea className="form-control" rows="3" placeholder="Reviews are for readers, not writers. If I get a bad one, I shrug it off. If I get a good one, I don't believe it. ~ William Meikle"></textarea>
          </div>
          <div className="form-group">
            <label>Upload book cover</label>
            <input className="upload-book-cover-file" type="file" />
            <label className="help-block">You should only upload jpg, png files. - Cloudinary</label>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <button type="submit" className="btn btn-default post-book-btn">Post</button>
            </div>
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

console.log("End of Component BookForm.js.");

export default BookForm;
