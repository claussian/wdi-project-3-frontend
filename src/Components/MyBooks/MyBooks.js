//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import action-creators and thunks
import {getCurrentBook} from '../../Actions/bookActions';
import {triggerNotification} from '../../Actions/appActions';

//Importing static assets (i.e. stylesheets, images)
import './MyBooks.css';

//Importing React Components
import Navbar from '../Navbar/Navbar';
import NavbarUser from '../Navbar/NavbarUser';
import NotificationHeader from '../NotificationHeader/NotificationHeader';
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

  whichMessage = (latestAction) => {
    switch (latestAction.type) {
      case "CREATE_BOOK_ACTION":
        break;
      case "RESERVE_BOOK_ACTION":
        let newBook = latestAction.book;
        return "You have placed a reservation for '" + newBook.title + "'. Kindly contact @" + newBook.owner.username + " at " + newBook.owner.email;
        break;
      case "UPDATE_BOOK_ACTION":
        let updatedBook = latestAction.book;
        return "You have updated " + updatedBook.title + " by " + updatedBook.author + "!"
        break;
      case "DELETE_BOOK_ACTION":
        break;
      default:
          return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.latestAction != nextProps.latestAction){
      this.props.triggerNotification(this.whichMessage(nextProps.latestAction));
      this.props.getCurrentBook(nextProps.currentBook._id,nextProps.books);
    }
  }

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

  // currentBookObj = (books, currentBookId) => {
  //   return books.filter( (book) => {
  //     return book._id == currentBookId;
  //   });
  // }
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
    books: state.books,
    latestAction: state.latestAction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerNotification: (message) => {dispatch(triggerNotification(message)); },
    getCurrentBook: (id, books) => {dispatch(getCurrentBook(id, books)); }
  }
}

console.log("End of Component Post.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);
