//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Gallery.css';

//Importing React Components
import Book from '../Book/Book';
import NotificationHeader from '../NotificationHeader/NotificationHeader';

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
        <NotificationHeader/>
        <div className="row" id="gallery">
          {/*Book components get generated below via axios.*/}
          <Book title="A Medium Book Title" author="Author McAuthor"/>
          <Book title="Book!" author="A. A. Auth"/>
          <Book title="A Very Super Long Book Title Hot Damn!" author="The Author With A Really Long Name"/>
          <Book title="Bk" author="Abo Ok"/>
          <Book title="A Fairly Alright Book" author="Apret Tymed Iumname"/>
          <Book title="The Longest Book In The History of the World And Its Still Going And Going" author="Anincrediblylong Nameanditsstillgoing Andgoingandgoingand going"/>
          <Book title="Book!" author="A. A. Auth"/>
          <Book title="Book!" author="A. A. Auth"/>
          <Book title="Book!" author="A. A. Auth"/>
          {/*Book components get generated above via axios.*/}
        </div>
        <hr />
      </div>
    );
  }
}


console.log("End of Component Gallery.js.");

export default Gallery;
