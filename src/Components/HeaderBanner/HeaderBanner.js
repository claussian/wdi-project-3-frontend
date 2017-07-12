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
            Encounter new books to read.
            <br/><br/>
            Or divulge your books with fellow readers and book lovers near you.
            <br/><br/>
            <b>How can I start?</b>
            <br/>
            Simply sign up for a account and start reserving books on the Bookshelf you want to read.
            <br/><br />
          </p>
          <p>
            <a className="btn btn-primary btn-large find-out-more-btn">Start now</a>
          </p>
        </header>
      </div>
    );
  }
}

console.log("End of Component HeaderBanner.js.");

export default HeaderBanner;
