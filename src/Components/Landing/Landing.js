//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './Landing.css';

//Importing React Components
import Navbar from '../Navbar/Navbar';
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Gallery from '../Gallery/Gallery';

console.log("Start of Component Landing.js. The landing page everyone sees without logging in.");

class Landing extends Component {
  constructor(props) {
    super(props);
  };



  render() {

    const isLoggedIn = this.props.user._id;


    return (
      <div className="container">
        <div className="row">
        {isLoggedIn ? (
          <NavbarUser user={this.props.user} linkRef="/mybooks" linkTitle="My books"/>
        ) : (
          <Navbar />
        )}
        </div>
        {!isLoggedIn ? <HeaderBanner /> : <div></div> }
        <Search />
        <Gallery />
        <Footer />
      </div>

      );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

console.log("End of Component Landing.js.");

export default connect(mapStateToProps)(Landing);
