//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';
import logo from './swap-books-med-logo.svg'; //This import does not work

console.log("Start of Component Navbar.js.");

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><img src={logo} alt="Swap Books" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="row">
                  <div className="col-lg-2">
                  </div>
                  <div className="col-lg-4">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Log In</a>
                        </li>
                        <li>
                            <a href="#">Sign Up</a>
                        </li>
                        <li>
                        </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                  </div>
                </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

console.log("End of Component Navbar.js.");

export default Navbar;
