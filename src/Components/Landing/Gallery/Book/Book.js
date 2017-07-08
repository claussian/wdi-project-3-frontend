//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Book.css';

console.log("Start of Component Book.js.");

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Component - Book {this.props.title}</h2>
      </div>
    );
  }
}


console.log("End of Component Book.js.");

export default Book;
