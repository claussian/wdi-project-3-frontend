//Importing required packages
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// Import thunk
import {localSignup} from '../../Actions/userActions';

//Importing static assets (i.e. stylesheets, images)
import './Signup.css';

console.log('Start of Component Signup.js.');

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userdata: {
        username: "",
        email: "",
        password: ""
      }
    }
  };

  onChange = (e) => {
    let userdata = this.state.userdata;
    userdata[e.target.name] = e.target.value
    this.setState({
      userdata: userdata
    })
    console.log('signup state', this.state)
  }

  onClick = (e) => {
    e.preventDefault();
    console.log("Fire signup");
    this.props.userSignup(this.state.userdata);
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        {/* Modal */}
        <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content signup-modal">
              <div className="modal-header signup-modal-header">
                <h5 className="modal-title" id="signupModalLabel">Sign up for a Swap Books account</h5>
                <button type="button" className="close signup-modal-close-btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                {/* Signup Form */}
                <form className="signup-modal-form">
                  <div className="form-group signup-modal-form-group">
                    <input type="text"
                           name="username"
                           className="form-control"
                           id="signup-modal-username-input"
                           placeholder="Enter username"
                           onChange={this.onChange}/>
                  </div>
                  <div className="form-group signup-modal-form-group">
                    <input type="email"
                           name="email"
                           className="form-control"
                           id="signup-modal-email-input"
                           placeholder="Enter email address"
                           onChange={this.onChange}/>
                  </div>
                  <div className="form-group signup-modal-form-group">
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="signup-modal-pw-input"
                           placeholder="Enter password"
                           onChange={this.onChange}/>
                  </div>
                  <button type="submit"
                          className="btn signup-modal-btn-submit"
                          onClick={this.onClick}>Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <button type="button" className="btn signup-modal-form-btn-fb">Sign up with Facebook</button>
                  <button type="button" className="btn signup-modal-form-btn-google">Sign up with Google</button>
                </div>
              </div>{/* /.modal-footer */}
            </div>{ /* /.modal-content */ }
          </div>{ /* /.modal-dialog */ }
        </div>{/* /.modal fade */}
      </div>
    );
  };
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (userdata) => {dispatch(localSignup(userdata)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
