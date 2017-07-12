//Importing required packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTerm, showCompleted } from '../../Actions/searchActions';

//Importing static assets (i.e. stylesheets, images)
import './Search.css';

console.log("Start of Component Search.js.");

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  onChange = (e) => {
    let searchText = e.target.value;
    this.props.changeSearchTerm(searchText);
    this.setState({
      searchTerm: searchText
    });
  }

  render() {
    return (
      <div>
        <header className="jumbotron search-form">
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="Search title" onKeyUp={this.onChange}/>
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

// Define state within the component
const mapStateToProps = (state) => {
    return {
        searchTerm : state.searchTerm
    }
};

// Define actions within the component
const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchTerm: (text) => { dispatch(searchTerm(text)); },
  }
};

console.log("End of Component Search.js.");

export default connect(mapStateToProps, mapDispatchToProps)(Search);
