//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Landing.css';

//Importing React Components
import Navbar from '../Landing/Navbar/Navbar';
import HeaderBanner from '../Landing/HeaderBanner/HeaderBanner';
import Gallery from '../Landing/Gallery/Gallery';
import Footer from '../Landing/Footer/Footer';

console.log("Start of Component Landing.js. The landing page when the user is logged in.");

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Navbar />
        <HeaderBanner />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

console.log("End of Component Landing.js.");

export default App;
