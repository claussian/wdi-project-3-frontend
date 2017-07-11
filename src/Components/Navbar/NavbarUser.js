//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import thunk
import {localLogout} from '../../Actions/userActions';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';
import './NavbarUser.css';
import logo from './swap-books-med-logo.svg';

//Importing React components
import NotificationHeader from '../NotificationHeader/NotificationHeader';

console.log("Start of Component Navbar User.js.");

class NavbarUser extends Component {
  constructor(props) {
    super(props);
  }

  execLogout = (e) => {
    e.preventDefault();
    this.props.Logout();
    window.location.href = "/";
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
              <a href="/" className="navbar-brand"><img src={logo} alt="Swap Books" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="row">
                <div className="col-md-push-2 col-md-8 col-lg-push-4 col-lg-5">
                  <ul className="nav navbar-nav">
                    <li>
                      {/*User Login*/}
                      <div className="row user-profile-group">
                        <div className="col-xs-4 col-sm-5">
                          <a className="profile-picture"><img src="http://via.placeholder.com/70x70"/></a>
                        </div>
                        <div className="col-xs-8 col-sm-7">
                          <h3>Welcome,</h3>
                          <h4>{this.props.user.username}</h4>
                        </div>
                      </div>
                    </li>
                    <li className="post-a-book-btn">
                      <a href={this.props.linkRef}>{this.props.linkTitle}</a>
                    </li>
                    <li className="log-out-btn">
                      <a onClick={this.execLogout}>Log out</a>
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

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {dispatch(localLogout()); }
  }
}

console.log("End of Component Navbar User.js.");

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);
