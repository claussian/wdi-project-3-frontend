//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './MySharedBookItem.css';

console.log("Start of Component MySharedBookItem.js.");

class MySharedBookItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let bgColor = "rgba(0,103,109,0.7)";

    return (
      <div className="row sharedbookitem-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 sharedbookitem-left">
            <span className="sharedbookitem-thumbnail">
              <img src={this.props.contents.cover} alt="..." />
            </span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 sharedbookitem-info">
            <h3>{this.props.contents.title}</h3>
            <h4>{this.props.contents.author}</h4>
            <h5>{this.props.contents.genre}</h5>
            <div className="sharedbookitemreview"
                 id={this.props.contents.title}
                 onMouseOver={this.onMouseOver}>
              <h5><b>Owner:</b> @{this.props.contents.owner.username}</h5>
            </div>
            <hr className="sharedbookitem-footer-line"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button className="btn btn-success sharedbookitem-update-btn"
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
console.log("End of Component MySharedBookItem.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MySharedBookItem);
