//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './NotificationHeader.css';

console.log("Start of Component Search.js.");

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReserved: false,
    }
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
        <header>
          <h2>{notificationMessage}</h2>
        </header>
      </div>
    );
  }
}

console.log("End of Component Search.js.");

export default Search;
