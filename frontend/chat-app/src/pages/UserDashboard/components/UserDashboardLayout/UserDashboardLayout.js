import React from "react";
import PropTypes from "prop-types";
import Header from "../../../../commonComponents/NavBar/Header";
import CreateChatRoomModal from "../CreateChatModal/CreateChatRoomModal";
import ChatCard from "../../../../commonComponents/ChatCard/ChatCard";

const UserDashBoardLayout = ({
  userProfile,
  userChatRooms,
  onHandleLogout
}) => {
  return (
    <>
      <Header userProfile={userProfile} onHandleLogout={onHandleLogout} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 25,
          flexWrap: "wrap"
        }}
      >
        {userChatRooms.map(userChatRoom => (
          <ChatCard
            key={userChatRoom._id}
            chatRoom={userChatRoom}
            userProfile={userProfile}
          />
        ))}
        <CreateChatRoomModal />
      </div>
    </>
  );
};

UserDashBoardLayout.propTypes = {
  userProfile: PropTypes.object,
  userChatRooms: PropTypes.arrayOf(PropTypes.object),
  onHandleLogout: PropTypes.func
};

export default React.memo(UserDashBoardLayout);
