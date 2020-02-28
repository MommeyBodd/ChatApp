import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../NavBar/Header";
import queryString from "query-string";
import { login } from "../../actions/authActions";

const UserDashBoardLayout = ({ location }) => {
  // useEffect(() => {
  //
  // }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

UserDashBoardLayout.propTypes = {};

export default UserDashBoardLayout;
