//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './BookFormEdit.css';

console.log("Start of Component BookFormEdit.js.");

class BookFormEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron book-form">
        <form>
          <div className="row">
            <div className="col-lg-6">
              <h2>Update A Book</h2>
            </div>
            <div className="col-lg-6">
              <span><button className="btn btn-default" onClick={this.props.activatePost}>Post</button></span>
            </div>
          </div>
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
            <select className="form-control" name="genre">
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
          {this.props.notification ?
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

export default BookFormEdit;
