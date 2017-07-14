//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creators and thunks
import {getCurrentBook} from '../../Actions/bookActions';

//Importing static assets (i.e. stylesheets, images)
import './MySharedBookItem.css';

console.log("Start of Component MySharedBookItem.js.");

class MySharedBookItem extends Component {

  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.getCurrentBook(e.target.id, this.props.books);
    this.props.activateEdit();
  }

  render() {

    return (
      <div className="row booklistitem-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 booklistitem-left">
            <span className="booklistitem-thumbnail">
              <img src={this.props.contents.cover} alt="..." />
            </span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 booklistitem-info">
            <h3>{this.props.contents.title}</h3>
            <h4>{this.props.contents.author}</h4>
            <h5>{this.props.contents.genre}</h5>
            <div className="booklistitemreview"
                 id={this.props.contents.title}
                 onMouseOver={this.onMouseOver}>
            {this.props.contents.reserved ?
              <div className="well booklistitem-well">
                <h4><b>Reserved by:</b> @{this.props.contents.reservedBy.username}</h4>
                <h4><b>Email: </b>{this.props.contents.reservedBy.email}</h4>
              </div> : null}
            </div>
            <hr className="booklistitem-footer-line"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button className="btn btn-success booklistitem-update-btn"
                    onClick={this.onClick}
                    id={this.props.id}>
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
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentBook: (id, books) => {dispatch(getCurrentBook(id, books)); }
  }
}

console.log("End of Component MySharedBookItem.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MySharedBookItem);
