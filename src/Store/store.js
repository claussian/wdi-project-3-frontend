import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from '../Reducers/bookReducer.js';
import userReducer from '../Reducers/userReducer.js';
import appReducer from '../Reducers/appReducer.js';
import searchReducer from '../Reducers/searchReducer.js';
import latestActionReducer from '../Reducers/latestActionReducer.js';


export let initStore = () => {

  const reducer = combineReducers( {
    searchQuery: searchReducer,
    books: bookReducer,
    user: userReducer,
    notification: appReducer,
    latestAction: latestActionReducer
  });

  /* thunk middleware enables dispatch of functions as actions */
  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}
