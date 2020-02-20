import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuth) return <Component {...props} />;
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  isAuth: PropTypes.bool
};

export default PrivateRoute;
