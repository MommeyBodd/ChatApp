import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ChatRoom from "../components/ChatRoom";

const ChatRoomContainer = ({ match }) => {
  useEffect(() => {
    const { roomId } = match.params;
    console.log(roomId);
  }, []);
  return <ChatRoom />;
};

ChatRoomContainer.propTypes = {};

export default ChatRoomContainer;
