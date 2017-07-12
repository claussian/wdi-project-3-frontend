//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './MyBookListItem.css';

console.log("Start of Component Book.js.");

class MyBookListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let bgColor = "rgba(0,103,109,0.7)";

    return (
      <div className="row booklistitem-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 booklistitem-left">
            <span className="booklistitem-thumbnail">
              <img src="http://via.placeholder.com/130x198" alt="..." />
            </span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 booklistitem-info">
            <h3>{this.props.title}</h3>
            <h4>{this.props.author}</h4>
            <h5>{this.props.genre}</h5>
            <div className="booklistitemreview"
                 id={this.props.title}
                 onMouseOver={this.onMouseOver}>
              <h5><b>Owner:</b> {this.props.ownerusername}</h5>
            </div>
            <hr className="booklistitem-footer-line"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div className="booklistitem-reserved-msg">
              Reserved by someone
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button className="btn btn-success booklistitem-update-btn"
                    style={{backgroundColor: bgColor}}
                    onClick={this.onClick}
                    id="test">
              Update >
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
console.log("End of Component Navbar.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MyBookListItem);
