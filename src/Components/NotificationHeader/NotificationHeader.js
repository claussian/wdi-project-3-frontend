//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creator
import {closeNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './NotificationHeader.css';

console.log("Start of Component Search.js.");

class NotificationHeader extends Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.closeNotification();
  }

  renderNotificationClass = (user) => {
    return user._id ? "notification-reserved" : "notification-error";
  }

  render() {

    return (
      <div className="notification-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
              <button id="notification-close-btn"
                      onClick={this.onClick}>
                <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
              </button>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
              <h2>{this.props.notification}</h2>
            </div>
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className={this.renderNotificationClass(this.props.user)}>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
    //           <button id="notification-close-btn"
    //                   onClick={this.onClick}>
    //             <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
    //           </button>
    //         </div>
    //         <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
    //           <h2>{this.props.notification}</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );

  }
}

//pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeNotification: () => {dispatch(closeNotification()); }
  }
}
console.log("End of Component NotificationHeader.js.");

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHeader);
