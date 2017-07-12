//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creator
import {closeNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './NotificationHeader.css';

console.log("Start of Component Search.js.");

class NotificationHeader extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isReserved: null,
    // }
  }

  onClick = (e) => {
    this.props.closeNotification();
    // let notificationState;
    // let notificationMessage;
    // console.log("clicked", "notificationState = ", notificationState, "notificationMessage = ", notificationMessage);
    // notificationState = "notification-hidden";
    // notificationMessage = "";
  }

  renderNotificationClass = (user) => {
    return user._id ? "notification-reserved" : "notification-error";
  }

  // renderNotificationMessage = (user) => {
  //   return user._id ? "Book successfully reserved !" : "Log in or sign up to borrow a book";
  // }

  render() {

    /*See below. When the user clicks on a book, it allows us to produce custom notification messages and styles based on whether the book.*/
    // let notificationState;
    // let notificationMessage;
    // switch (this.state.isReserved) {
    //   case true:
    //     notificationState = "notification-error";
    //     notificationMessage = "Alas, this book has already been reserved !";
    //     break;
    //   case false:
    //     notificationState = "notification-reserved";
    //     notificationMessage = "Book successfully reserved !";
    //     break;
    //   default: notificationState = "notification-hidden";
    // };
    /*See above. When the user clicks on a book, it allows us to produce custom notification messages and styles based on whether the book.*/

    // console.log("Notification class is '",notificationState,"'.");
    //
    // console.log("End of Component Search.js.");

    return (
      <div className={this.renderNotificationClass(this.props.user)}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
              <button id="notification-close-btn"
                      onClick={this.onClick}>
                <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
              </button>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
              <h2>{this.props.notification}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeNotification: () => {dispatch(closeNotification()); }
  }
}
console.log("End of Component NotificationHeader.js.");

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHeader);
