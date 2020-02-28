import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import queryString from "query-string";

const PrivateRoute = ({
  component: Component,
  isAuth,
  isLoading,
  withTokenAwait,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (withTokenAwait) {
          if (isAuth) return <Component {...props} />;
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }

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
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  isAuth: PropTypes.bool
};

export default connect(state => ({
  isAuth: state.userDashBoard.isAuth,
  isLoading: state.userDashBoard.isLoading
}))(PrivateRoute);
