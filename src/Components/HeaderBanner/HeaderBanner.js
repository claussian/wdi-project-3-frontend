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
          <h1>Welcome to Swap Books!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
          </p>
          <p>
            <a className="btn btn-primary btn-large find-out-more-btn">Find out more</a>
          </p>
        </header>
      </div>
    );
  }
}

console.log("End of Component HeaderBanner.js.");

export default HeaderBanner;
