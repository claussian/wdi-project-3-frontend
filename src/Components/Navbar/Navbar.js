//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';
import logo from './swap-books-med-logo.svg';

console.log("Start of Component Navbar.js.");

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top"     role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
              </button>
              <a className="navbar-brand" href="/"><img src={logo} alt="Swap Books" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="row">
                <div className="col-lg-offset-4 col-lg-8">
                  <ul className="nav navbar-nav">
                    <li>
                    {/*Email and Password Login & its button*/}
                      <form className="form-inline login-group">
                        <div className="form-group">
                          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-default">Log in</button>
                      </form>
                    </li>
                    <li>
                      <a href="./signup">Sign Up</a>
                    </li>
                  </ul>
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
