import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenService } from '../services/storage.service';
function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useSelector(state => state.auth);
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
        TokenService.getToken() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;