import React from "react";
import PropTypes from "prop-types";
import Header from "../../../commonComponents/NavBar/Header";

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
    <div>
      <Header chatName={chatName} />
    </div>
  );
};

ChatRoom.propTypes = {};

export default ChatRoom;
