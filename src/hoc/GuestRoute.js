import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
function GuestRoute({ children, ...rest }) {
    const { isAuthenticated } = useSelector(state => state.auth);
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated ? (
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
export default GuestRoute;