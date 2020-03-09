import React from "react";
import PropTypes from "prop-types";
import "./chatRoom.scss";
import Header from "../../../../commonComponents/NavBar/Header";
import Chat from "../Chat/Chat";

const ChatRoom = ({ chatInfo }) => {
  const {
    _id,
    chatName,
    creatorName,
    creatorId,
    participants,
    messages
  } = chatInfo;

  console.log(chatInfo);
  return (
    <>
      <Header chatName={chatName} />
      <div className="chat-container">
        <div className="members-area"></div>
        <div className="chat-area">
          <Chat />
        </div>
        <div className="smth-area"></div>
      </div>
    </>
  );
};

ChatRoom.propTypes = {};

export default ChatRoom;
