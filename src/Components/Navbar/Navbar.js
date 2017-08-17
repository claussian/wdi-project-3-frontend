//Importing required packages
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// Import thunk
import {localLogin} from '../../Actions/userActions';

//Importing React components
import NotificationHeader from '../NotificationHeader/NotificationHeader';
import Signup from '../Signup/Signup';

//Importing static assets (i.e. stylesheets, images)
import './Navbar.css';
import logo from './swap-books-med-logo.svg';

console.log("Start of Component Navbar.js.");

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

  onChange = (e) => {
    var state = this.state;
    var key = e.target.name;
    var value = e.target.value;

    state[key] = value;
    this.setState(state);
  }


  localLogin = (e) => {
    e.preventDefault();
    this.props.Login(this.state);
    /* This ensures the user is scrolled back up after clicking links */
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox

    // axios.post('/auth/login', this.state)
    //   .then( (response) => {
    //     let data = response.data;
    //     if(data.error){
    //       console.log(data.message)
    //       this.setState({
    //         error:data.message
    //       });
    //     }else{
    //       console.error("AJAX: Logged in @ '/auth/user'");
    //       window.location.href = "/";
    //     }
    //   })
    //   .catch((error)=> {
    //     console.error("AJAX: Could not login @ '/auth/login'")
    //     this.setState({
    //       error:"Notify the dev team!"
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top"     role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                {/*Three Icon Bars in mobile displays*/}
                <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
              </button>
              <a href="./" className="navbar-brand"><img src={logo} alt="Swap Books" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="row">
                <div className="col-md-push-2 col-md-8 col-lg-push-4 col-lg-6">
                  <ul className="nav navbar-nav">
                    <li>
                    {/*Email and Password Login & its button*/}
                      <form className="form-inline login-group">
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" id="navbar-email-input" placeholder="Email" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" className="form-control" id="navbar-password-input" placeholder="Password" onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.localLogin}>Log in</button>
                      </form>
                    </li>
                    <li className="nav-sign-up">
                      <a data-toggle="modal" data-target="#signupModal">Sign up</a>
                    </li>
                  </ul>{/* /nav narbar-nav */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {this.props.notification ? <NotificationHeader/> : null}
                </div>{/* /col-md-push-2 col-md-8 col-lg-push-4 col-lg-5 */}
              </div>{/* /row */}
              <div className="row">
                <div className="col-lg-12">
                  <Signup />
                </div>
              </div>
            </div>{/* /bs-example-navbar-collapse-1 */}
          </div>{/* container */}
        </nav>{/* navbar navbar-inverse navbar-fixed-top */}
      </div>
    );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (credentials) => {dispatch(localLogin(credentials)); }
  }
}
console.log("End of Component Navbar.js.");

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
