//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';
import './NavbarUser.css';
import logo from './swap-books-med-logo.svg';

//Importing React components
import NotificationHeader from '../NotificationHeader/NotificationHeader';

console.log("Start of Component Navbar User.js.");

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
              <button type="button"
                      className="navbar-toggle"
                      data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                {/*Three Icon Bars in mobile displays*/}
                <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
              </button>
              <a className="navbar-brand" href="/"><img src={logo} alt="Swap Books" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="row">
                <div className="col-md-push-2 col-md-8 col-lg-push-4 col-lg-5">
                  <ul className="nav navbar-nav">
                    <li>
                      {/*User Login*/}
                      <div className="row user-profile-group">
                        <div className="col-xs-4 col-sm-5">
                          <a className="profile-picture" href="./usertest"><img src="http://via.placeholder.com/70x70"/></a>
                        </div>
                        <div className="col-xs-8 col-sm-7">
                          <h3>Welcome,</h3>
                          <h4>{this.props.username}</h4>
                        </div>
                      </div>
                    </li>
                    <li className="post-a-book-btn">
                      <a href="./post">Post a book</a>
                    </li>
                    <li className="log-out-btn">
                      <a href="./">Log out</a>
                    </li>
                  </ul>{/* /nav narbar-nav */}
                </div>{/* /col-md-push-2 col-md-8 col-lg-push-4 col-lg-5 */}
              </div>{/* /row */}
            </div>{/* /bs-example-navbar-collapse-1 */}
          <div className="row">
            <div className="col-lg-12">
              <NotificationHeader />
            </div>
          </div>
          </div>{/* container */}
        </nav>{/* navbar navbar-inverse navbar-fixed-top */}
      </div>
    );
  }
}

console.log("End of Component Navbar User.js.");

export default Navbar;
