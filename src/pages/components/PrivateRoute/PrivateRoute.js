import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoader} = useAuth();
    if(isLoader){
      return   <Spinner animation="grow" variant="success" />
    }
    return (
      <Route
      {...rest}
      render= { ({location}) =>user.email ? children :
      <Redirect to ={{
          pathname :"/login",
          state : { from : location}
      }} ></Redirect>
    }
      
      >

      </Route>
    );
};

export default PrivateRoute;