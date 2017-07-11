import axios from 'axios';

const updateUser = (user) => {
  return {
    type: "USER_UPDATE",
    user
  }
}

/* Obtain credentialed user via passport object */
export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        dispatch(updateUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
        dispatch(updateUser({}));
      });
  };
}

export const localLogin = (credentials) => {
  return (dispatch) => {
    axios.post('/auth/login', credentials)
      .then( (response) => {
        // this data is just the user object but may not be a credentialed user from passport
        const data = response.data;
        // this returns a credentialed user from passport
        dispatch(getUser());
        if(data.error){
          console.log(data.message)
        }else{
          console.error("AJAX: Logged in @ '/auth/user'");
          // window.location.href = "/";
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not login @ '/auth/login'");
      });
    }
}

export const localLogout = () => {
  return (dispatch) => {
    axios.get('/auth/logout')
      .then( (response) => {
        // this data is just the user object but may not be a credentialed user from passport
        const data = response.data;
        // this returns a credentialed user from passport
        dispatch(getUser());
        if(data.error){
          console.log(data.message)
        }else{
          console.error("AJAX: Logged out @ '/auth/logout'");
          // window.location.href = "/";
        }
      })
      .catch((error)=> {
        console.error("AJAX: Could not logout @ '/auth/logout'");
      });
    }
}
