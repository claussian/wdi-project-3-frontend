//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './HeaderBanner.css';

console.log("Start of Component HeaderBanner.js.");

class HeaderBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron welcome-msg">
          <h1>Read & share offline books online</h1>
          <p>
            Encounter exciting books to borrow and browse.
            <br/>
            Bestow your books for fellow bookworms.
            <br/>
            For free forever.
            <hr/>
            <h3>How can I start?</h3>
            Simply sign up for a account and you can immediately start reserving books you want to borrow on <b>The Bookshelf</b> below. To start sharing your books, submit your books in <b>My Books</b> .
          </p>
          <p>
            <a className="btn btn-primary btn-large find-out-more-btn" data-toggle="modal" data-target="#signupModal">Start now</a>
          </p>
        </header>
      </div>
    );
  }
}

console.log("End of Component HeaderBanner.js.");

export default HeaderBanner;
