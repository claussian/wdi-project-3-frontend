//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';

console.log("Start of Component Navbar.js.");

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Component - Navbar</h1>
      </div>
    );
  }
}

console.log("End of Component Navbar.js.");

export default Navbar;
