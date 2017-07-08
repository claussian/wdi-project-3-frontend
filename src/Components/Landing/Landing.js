//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Landing.css';

//Importing React Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from './Search/Search';
import HeaderBanner from './HeaderBanner/HeaderBanner';
import Gallery from './Gallery/Gallery';

console.log("Start of Component Landing.js. The landing page everyone sees without logging in.");

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Search />
        <HeaderBanner />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

console.log("End of Component Landing.js.");

export default App;
