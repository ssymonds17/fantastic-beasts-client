import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Component, loginBool }) => {
  const id = localStorage.getItem('user_id');
  console.log('id: ', id);
  console.log('login required: ', loginBool);

  if (loginBool) {
    return (
      <Route
        render={(props) =>
          id ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    );
  } else if (!loginBool) {
    return (
      <Route
        render={(props) =>
          !id ? <Component {...props} /> : <Redirect to='/' />
        }
      />
    );
  }
};

export default PrivateRoute;
