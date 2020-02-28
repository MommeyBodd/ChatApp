import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../NavBar/Header";

const UserDashBoardLayout = ({ userProfile }) => {
  return (
    <div>
      <Header userProfile={userProfile} />
    </div>
  );
};

UserDashBoardLayout.propTypes = {};

export default UserDashBoardLayout;
