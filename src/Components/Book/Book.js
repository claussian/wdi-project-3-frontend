//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creator
import {triggerNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './Book.css';

console.log("Start of Component Book.js.");

class Book extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   isReserved: false,
    // }
  }

  // changeColor() {
  //   this.setState({
  //     isReserved: !this.state.isReserved
  //   })
  // }

  onClick = (e) => {
    if (!this.props.user._id) {
      this.props.triggerNotification("Please log in or sign up to borrow a book");
    }

    // e.target.id check against this.props.contents.reserved

  }

  onMouseOver = (e) => {
    console.log("e.target.id is", e.target.id);
  }

  render() {

    let bgColor = this.props.contents.reserved ? "rgba(124,35,69,1)" : "rgba(0,103,109,0.7)";

    return (
      <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 book-container">
        <span className="book-thumbnail">
          <img src={this.props.contents.cover} alt="..." />
          <h3>{this.props.contents.title}</h3>
          <h4>{this.props.contents.author}</h4>
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
              <button className="btn btn-success book-available-btn">
                Available
              </button>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <button className="btn btn-success book-reserve-btn"
                      style={{backgroundColor: bgColor}}
                      onClick={this.onClick}
                      id={this.props.id}>
                Reserve
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
    triggerNotification: (message) => {dispatch(triggerNotification(message)); }
  }
}
console.log("End of Component Navbar.js.");

export default connect(mapStateToProps, mapDispatchToProps)(Book);
