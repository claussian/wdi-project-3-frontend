//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './NotificationHeader.css';

console.log("Start of Component Search.js.");

class NotificationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReserved: true,
    }
  }

  onClick = (e) => {
    console.log("clicked", "notificationState = ", notificationState, "notificationMessage = ", notificationMessage);
    let notificationState;
    let notificationMessage;
    this.notificationState = "notification-hidden";
    this.notificationMessage = "";
  }

  render() {

    /*See below. When the user clicks on a book, it allows us to produce custom notification messages and styles based on whether the book.*/
    let notificationState;
    let notificationMessage;
    switch (this.state.isReserved) {
      case true:
        notificationState = "notification-error";
        notificationMessage = "Alas, this book has already been reserved !";
        break;
      case false:
        notificationState = "notification-reserved";
        notificationMessage = "Book successfully reserved !";
        break;
      default: notificationState = "notification-hidden";
    };
    /*See above. When the user clicks on a book, it allows us to produce custom notification messages and styles based on whether the book.*/

    console.log("Notification class is '",notificationState,"'.");

    return (
      <div className={notificationState}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
              <button id="notification-close-btn"
                      onClick={this.onClick}>
                <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
              </button>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
              <h2>{notificationMessage}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

console.log("End of Component Search.js.");

export default NotificationHeader;
