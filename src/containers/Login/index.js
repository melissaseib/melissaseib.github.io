/**
 *
 * Login
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { push } from "react-router-redux";
import selectUser from "selectors/user";
export class Login extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showForgotPassword: false,
      email: "",
      password: "",
      alert: "none"
    };
  }

  redirectUser = () => {
    const location = this.props.location;
    if (location.state && location.state.referrer) {
      this.props.redirectUserToRoute(location.state.referrer);
    } else {
      this.props.redirectUserToRoute("/landing");
    }
  };
  render() {
    return (
      <div>
        <h3>Hello Login</h3>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: selectUser()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    redirectUserToRoute: route => dispatch(push(route))
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(Login);
