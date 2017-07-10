//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './Landing.css';

//Importing React Components
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Gallery from '../Gallery/Gallery';

console.log("Start of Component Landing User.js. The landing page when the user is logged in.");

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="container">
        <NavbarUser username="Hanif"/>
        <Search />
        <HeaderBanner />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

console.log("End of Component Landing User.js.");

export default App;
