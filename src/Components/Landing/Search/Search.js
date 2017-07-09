//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Search.css';

console.log("Start of Component Search.js.");

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron search-form">
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="Search title" />
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  Search
                </button>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

console.log("End of Component Search.js.");

export default Search;
