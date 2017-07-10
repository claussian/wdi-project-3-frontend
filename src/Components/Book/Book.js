//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Book.css';

console.log("Start of Component Book.js.");

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReserved: false,
    }
  }

  changeColor() {
    this.setState({
      isReserved: !this.state.isReserved
    })
  }

  onMouseOver = (e) => {
    console.log("e.target.id is", e.target.id);
  }

  render(){

    let bgColor = this.state.isReserved ? "red" : "green";

    return (
      <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 book-container">
        <span className="book-thumbnail">
          <img src="http://placehold.it/130x198" alt="..." />
          <h3>{this.props.title}</h3>
          <h4>{this.props.author}</h4>
          <div className="bookreview"
               id={this.props.title}
               onMouseOver={this.onMouseOver}>
            <h5>Book review here</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <hr className="book-footer-line"/>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              {/*<div className="ratings">
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star-empty"></span>
              </div>*/}
            </div>
            <div className="col-md-6 col-sm-6">
              <button className="btn btn-success book-reserve-btn"
                      style={{backgroundColor: bgColor}}
                      onClick={this.changeColor.bind(this)}>
                Reserve
              </button>
            </div>
          </div>
        </span>
      </div>
    )
  }
}

export default Book;
