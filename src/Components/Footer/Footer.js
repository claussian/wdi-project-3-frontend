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
      <div className="container">
        <footer>
            <div className="row footer">
                <div className="col-lg-12">
                    <p>Project 3 (Hanif, Tiffany & Woody) - WDI-10 Singapore </p>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}


console.log("End of Component Footer.js.");

export default Footer;
