import React, { useContext } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import { UserContext } from './App';

const PrivateRoute = ({ children, ...rest }) => {
    
    const [loggedinUser,setLoggedUser] = useContext(UserContext);
    console.log("email ",loggedinUser.email);
    const loc= useLocation();
    console.log("loc ",loc);
    // if(loc.pathname=="/admin"){
    //   setLoggedUser({});
    // }
    
    return (
      <Route
      {...rest}
      render={({ location }) =>
      loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;