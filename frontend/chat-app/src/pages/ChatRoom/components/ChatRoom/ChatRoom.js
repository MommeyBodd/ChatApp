import React from "react";
import PropTypes from "prop-types";
import "./chatRoom.scss";
import Header from "../../../../commonComponents/NavBar/Header";
import Chat from "../Chat/Chat";
import ChatMembers from "../ChatMembers/ChatMembers";
import mockMembers from "../ChatMembers/mockMembers";

const ChatRoom = ({ chatInfo, currentUser, userList, onHandleUserInvite }) => {
  const {
    _id,
    chatName,
    creatorName,
    creatorId,
    participants,
    messages
  } = chatInfo;

  const { avatar } = currentUser;

  return (
    <>
      <Header chatName={chatName} />
      <div className="chat-container">
        <div className="members-area">
          <ChatMembers
            members={participants}
            creatorId={creatorId}
            creatorAvatar={avatar}
            userList={userList}
            chatId={_id}
            onHandleUserInvite={onHandleUserInvite}
          />
        </div>
        <div className="chat-area">
          <Chat messages={messages} />
        </div>
        <div className="smth-area"></div>
      </div>
    </>
  );
};

ChatRoom.propTypes = {
  onHandleUserInvite: PropTypes.func
};

ChatRoom.defaultProps = {
  chatInfo: {}
};

export default ChatRoom;