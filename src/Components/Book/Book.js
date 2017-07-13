//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creators and thunks
import {triggerNotification} from '../../Actions/appActions';
import {reserveBook} from '../../Actions/bookActions';

//Importing static assets (i.e. stylesheets, images)
import './Book.css';

console.log("Start of Component Book.js.");

class Book extends Component {

  constructor(props) {
    super(props);
  }

  renderAvailableClass = (reservedBy) => {
    return reservedBy ? "book-not-available-btn" : "book-available-btn";
  }

  renderAvailableMessage = (reservedBy) => {
    return reservedBy ? "Reserved by @" + reservedBy.username : "available";
  }



  onClick = (e) => {

    if (!this.props.user._id) { // user has not logged in
      this.props.triggerNotification("Please log in or sign up to borrow a book");
    }
    else if (this.props.contents.reserved) { // book is already reserved
      this.props.triggerNotification("Sorry, this book has been borrowed by @" + this.props.contents.reservedBy.username);
    }
    else if (this.props.contents.owner._id == this.props.user._id) {
      this.props.triggerNotification("You cannot reserve your own book.");
    }
    else {
      this.props.reserveBook(e.target.id);
    }
    // e.target.id check against

  }



  // onMouseOver = (e) => {
  //   console.log("e.target.id is", e.target.id);
  // }

  render() {

    let bookReserveColour = this.props.contents.reserved ? "rgba(209,209,209,1)" : "rgba(0,103,109,0.7)";

    let bookReserveMsg = this.props.contents.reserved ? "Reserved" : "Reserve";

    return (
        <div className="book">
            <span className="book-thumbnail">
              <img src={this.props.contents.cover} alt="..." />
              <h3>{this.props.contents.title}</h3>
              <h4>{this.props.contents.author}</h4>
              <h5>{this.props.contents.genre}</h5>
              <div className="bookreview"
                   id={this.props.contents.title}
                   onMouseOver={this.onMouseOver}>
                <h5><b>Owner:</b> {this.props.contents.owner.username}</h5>
                <p>{this.props.contents.review}</p>
              </div>
              <hr className="book-footer-line"/>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  {/*<div className="ratings">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>*/}
                  <div className={this.renderAvailableClass(this.props.contents.reservedBy)}>
                    {this.renderAvailableMessage(this.props.contents.reservedBy)}
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <button className="btn btn-success book-reserve-btn"
                          style={{backgroundColor: bookReserveColour}}
                          onClick={this.onClick}
                          id={this.props.id}>
                    {bookReserveMsg}
                  </button>
                </div>
              </div>
            </span>
      </div>
    )
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerNotification: (message) => {dispatch(triggerNotification(message)); },
    reserveBook: (id) => {dispatch(reserveBook(id))}
  }
}
console.log("End of Component Navbar.js.");

export default connect(mapStateToProps, mapDispatchToProps)(Book);
