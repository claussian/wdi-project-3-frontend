import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addUser} from '../../Actions/userActions'
import Modal from 'react-modal';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isModalOpen: this.props.showSignup
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps);
    if(prevProps.signUpState != this.props.signUpState){
      console.log("test");
      // re-render entire component
      this.setState({
        isModalOpen: this.props.signUpState
      })
    }
  }

  onChange = (e) => {
    var state = this.state;
    var key = e.target.name;
    var value = e.target.value;

    state[key] = value;
    this.setState(state);
    console.log(this.state)
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.addUser(this.state)
  }

  render() {

    return (
      <div className="wrapper">
      <Modal isOpen={this.state.isModalOpen}>
          <div className="modal-dialog">
            <div id="modal-content">
              <div className="modal-header" align="center">
                <button type="button"
                        className="close"
                        onClick={this.handleToggle}>
                  <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                </button>
              </div>

                <div className="modal-body">

                    <div id="div-signup-msg">
                      <div className="glyphicon glyphicon-pencil" />
                      <span id="text-signup-msg">Create your Account.</span>
                      </div>
                    </div>

                    <form id="signup-form">
                      <input id="signup_username"
                             className="form-control"
                             type="text"
                             placeholder="charlesdickins@thebattleoflife.com"
                             name="email"
                             onChange={this.onChange}
                             required />
                      <input id="signup_password"
                             className="form-control"
                             type="password"
                             placeholder="#!&!%@(!this (Your password should have at least 1 special character)"
                             name="password"
                             onChange={this.onChange}
                             required />
                    </form>

                    <div className="modal-footer">
                        <button type="submit"
                                className="btn btn-primary btn-lg btn-block"
                                onClick={this.onClick}>Signup</button>
                    </div>

                </div>

            </div>
          </Modal>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (email, password) => {dispatch(addUser(email, password))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
