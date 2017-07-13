//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './MyBooks.css';

//Importing React Components
import Navbar from '../Navbar/Navbar';
import NavbarUser from '../Navbar/NavbarUser';
import MySharedBooks from '../MySharedBooks/MySharedBooks';
import MyBorrowedBooks from '../MyBorrowedBooks/MyBorrowedBooks';
import BookForm from '../BookForm/BookForm';
import BookFormEdit from '../BookFormEdit/BookFormEdit';
import Footer from '../Footer/Footer';

console.log("Start of Component MyBooks.js. The MyBooks page for the current user:");

class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
  };

  activatePost = () => {
    this.setState({
      editForm: false
    })
  }

  activateEdit = () => {
    this.setState({
      editForm: true
    })
  }

  currentBookObj = (books, currentBookId) => {
    return books.filter( (book) => {
      return book._id == currentBookId;
    });
  }
  // currentBookObj={this.currentBookObj(this.props.books, this.props.currentBook)[0]
  render() {

    const isLoggedIn = this.props.user._id;

    //console.log(this.currentBookObj(this.props.books, this.props.currentBook)[0]);


    return (

      <div className="container">
        <div className="row">
          {/*This if statement toggles between logged-in navbar and public navbar below*/}
          {isLoggedIn ? (
            <NavbarUser user={this.props.user} linkRef="/" linkTitle="Home"/>
          ) : (
            <Navbar />
          )}
        {/*This if statement toggles between logged-in navbar and public navbar above*/}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
            <MySharedBooks activateEdit={this.activateEdit}/>
            <MyBorrowedBooks />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          {this.state.editForm ? <BookFormEdit activatePost={this.activatePost}/> : <BookForm />}
          </div>
        </div> {/* /row */}
        <Footer />
      </div>
    );
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentBook: state.currentBook,
    books: state.books
  }
}

console.log("End of Component Post.js.");

export default connect(mapStateToProps)(MyBooks);
