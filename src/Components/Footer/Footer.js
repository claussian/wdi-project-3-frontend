//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Footer.css';

console.log("Start of Component Footer.js.");

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Component - Footer</h1>
      </div>
    );
  }
}


console.log("End of Component Footer.js.");

export default Footer;
