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
  changeColor(){
            this.setState({isReserved: !this.state.isReserved})
    }
  onMouseEnterHandler = (e) => {
    console.log(e.target.id)
  }
        render(){
        let bgColor = this.state.isReserved ? "red" : "green"
        return (
          <div className="col-md-3">
            <button style={{backgroundColor: bgColor}}
                    onClick={this.changeColor.bind(this)}>Reserve</button>
            <div className="bookpic"><h1>BOOKPIC</h1></div>
            <div className="bookreview"
                  id="bookreview here"
                onHover={this.onMouseEnterHandler}>hello moto</div>
            <div className="bookinfo">
              Title:
              Author:
            </div>
            <div className="reservebook"></div>
          </div>
      )
    }
}
export default Book;
