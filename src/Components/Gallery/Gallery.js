//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Gallery.css';

//Importing React Components
import Book from './Book/Book';

console.log("Start of Component Gallery.js.");

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Component - Gallery</h1>
        <Book title="1"/>
        <Book title="2"/>
        <Book title="3"/>
      </div>
    );
  }
}


console.log("End of Component Gallery.js.");

export default Gallery;
