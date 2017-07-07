//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import logo from './logo.svg';
import './App.css';

//Importing React Components
import Navbar from '../Navbar/Navbar';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

console.log("Start of Component App.js.");

class App extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="App">
          <Navbar />
          <HeaderBanner />
          <Gallery />
          <Footer />
      </div>
    );
  }
}

console.log("End of Component App.js.");

export default App;
