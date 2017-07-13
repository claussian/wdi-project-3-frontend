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
      book: this.props.currentBookObj
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillUpdate called");
    //if(this.state.book != nextProps.currentBook) {

  //  }
  }

  // helper function to render selected


  render() {
    //console.log(this.selectGenre(this.props.books, this.state.book));

    const selectGenre = (books, currentBook) => {
      let genres = books.map( (book) => {
        return book.genre;
      });
      let unique = genres.filter((v, i, a) => {
        return a.indexOf(v) === i; // return only first instance of v
      });
      let selected =
      unique.forEach( (elem) => {
        if(elem == currentBook.genre)  {
          selected += <option selected>{elem}</option>
        }
        else {
          selected += <option>{elem}</option>
        }
      });
      return selected;
    }

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
            <input type="email" className="form-control" placeholder={this.state.book.title} defaultValue={this.state.book.title}/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="password" className="form-control" placeholder={this.state.book.author}/>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control" name="genre">
              {this.selectGenre(this.props.books, this.state.book)}
            </select>
          </div>
          <div className="form-group">
            <label>Your review</label>
            <textarea className="form-control" rows="3" placeholder={this.state.book.review}></textarea>
          </div>
          <div className="form-group">
          {this.state.book.reserved ?
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
