import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import {
  getAvailableUsersStart,
  getChatRoomInformationStart
} from "../actions/chatRoomActions";

const ChatRoomContainer = ({ match }) => {
  const dispatch = useDispatch();

  const { currentChatRoom, availableUsers } = useSelector(
    state => state.chatRoom
  );
  const currentUser = useSelector(state => state.userDashBoard.userProfile);

  useEffect(() => {
    const { roomId } = match.params;
    dispatch(getChatRoomInformationStart(roomId));
    dispatch(getAvailableUsersStart(currentUser._id));
    // console.log(roomId);
  }, []);
  return (
    <ChatRoom
      chatInfo={currentChatRoom}
      currentUser={currentUser}
      userList={availableUsers}
    />
  );
};

ChatRoomContainer.propTypes = {};

export default ChatRoomContainer;
