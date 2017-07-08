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
        <h1>Component - HeaderBanner</h1>
      </div>
    );
  }
}

console.log("End of Component HeaderBanner.js.");

export default HeaderBanner;
