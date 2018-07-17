import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user.isEmpty() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: props.location.pathname }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    user: state.get("global").get("user")
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(
  PrivateRoute
);
