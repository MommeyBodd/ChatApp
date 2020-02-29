import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../NavBar/Header";

const UserDashBoardLayout = ({ userProfile, onHandleLogout }) => {
  return (
    <div>
      <Header userProfile={userProfile} onHandleLogout={onHandleLogout} />
    </div>
  );
};

UserDashBoardLayout.propTypes = {};

export default UserDashBoardLayout;
