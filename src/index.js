import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';


import { getUser } from './Actions/userActions';
import { getBooks , getBorrowedBooks, getSharedBooks } from './Actions/bookActions';

// Redux
import { Provider } from 'react-redux';
import { initStore } from './Store/store';


// initialise store
const store = initStore();

// Load user
store.dispatch(getUser());

// Load books
store.dispatch(getBooks());
store.dispatch(getBorrowedBooks());
store.dispatch(getSharedBooks());

ReactDOM.render( <Provider store={store}>
                  <App />
                 </Provider>,
                 document.getElementById('root'));
registerServiceWorker();
