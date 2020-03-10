import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import {
  getAvailableUsersStart,
  getChatRoomInformationStart,
  inviteUserRequest
} from "../actions/chatRoomActions";

const ChatRoomContainer = ({ match }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.userDashBoard.userProfile);
  const { currentChatRoom, availableUsers } = useSelector(
    state => state.chatRoom
  );

  useEffect(() => {
    const { roomId } = match.params;
    console.log(roomId);
    dispatch(getChatRoomInformationStart(roomId));
    dispatch(getAvailableUsersStart(currentUser._id));
  }, []);

  const onHandleUserInvite = useCallback(payload => {
    dispatch(inviteUserRequest(payload));
  }, []);
  return (
    <ChatRoom
      chatInfo={currentChatRoom}
      currentUser={currentUser}
      userList={availableUsers}
      onHandleUserInvite={onHandleUserInvite}
    />
  );
};

ChatRoomContainer.propTypes = {};

export default React.memo(ChatRoomContainer);
