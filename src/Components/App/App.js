//Importing required packages
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//Importing static assets (i.e. stylesheets, images)
import './App.css';

//Importing React Components
import Landing from '../Landing/Landing';
import MyBooks from '../MyBooks/MyBooks';

console.log("Start of Component App.js.");

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/mybooks" component={MyBooks}/>
        </Switch>
      </Router>
    );
  }
}

console.log("End of Component App.js.");

export default App;
