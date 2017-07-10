//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Gallery.css';

//Importing React Components
import Book from '../Book/Book';

console.log("Start of Component Gallery.js.");

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <hr/>
        <h1 id="gallery-header">The Bookshelf</h1>
        <div className="row" id="gallery">
          {/*Book components get generated below via axios.*/}
          <Book title="1"/>
          <Book title="2"/>
          <Book title="3"/>
          <Book title="4"/>
          <Book title="5"/>
          <Book title="6"/>
          <Book title="7"/>
          <Book title="8"/>
          <Book title="9"/>
          {/*Book components get generated above via axios.*/}
        </div>
        <hr />
      </div>
    );
  }
}


console.log("End of Component Gallery.js.");

export default Gallery;
