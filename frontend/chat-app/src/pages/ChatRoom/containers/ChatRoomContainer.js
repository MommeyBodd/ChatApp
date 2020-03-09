import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import { getChatRoomInformationStart } from "../actions/chatRoomActions";

const ChatRoomContainer = ({ match }) => {
  const dispatch = useDispatch();
  const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom);

  useEffect(() => {
    const { roomId } = match.params;
    dispatch(getChatRoomInformationStart(roomId));
    // console.log(roomId);
  }, []);
  return <ChatRoom chatInfo={currentChatRoom} />;
};

ChatRoomContainer.propTypes = {};

export default ChatRoomContainer;
