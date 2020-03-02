import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../NavBar/Header";
import CreateChatRoomModal from "../CreateChatModal/CreateChatRoomModal";

const UserDashBoardLayout = ({ userProfile, onHandleLogout }) => {
  return (
    <div>
      <Header userProfile={userProfile} onHandleLogout={onHandleLogout} />
      <CreateChatRoomModal />
    </div>
  );
};

UserDashBoardLayout.propTypes = {};

export default UserDashBoardLayout;
