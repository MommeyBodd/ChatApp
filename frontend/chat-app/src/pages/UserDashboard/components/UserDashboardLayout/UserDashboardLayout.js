import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../../../../commonComponents/NavBar/Header";
import CreateChatRoomModal from "../CreateChatModal/CreateChatRoomModal";
import ChatCard from "../../../../commonComponents/ChatCard/ChatCard";

const UserDashBoardLayout = ({
  userProfile,
  userChatRooms,
  onHandleLogout,
  isLoading
}) => {
  console.log(isLoading);
  return (
    <div>
      <Header userProfile={userProfile} onHandleLogout={onHandleLogout} />
      <div style={{ display: "flex", alignItems: "center", padding: 25 }}>
        {userChatRooms.map(userChatRoom => (
          <ChatCard chatRoom={userChatRoom} userProfile={userProfile} />
        ))}
        <CreateChatRoomModal />
      </div>
    </div>
  );
};

UserDashBoardLayout.propTypes = {};

export default UserDashBoardLayout;
