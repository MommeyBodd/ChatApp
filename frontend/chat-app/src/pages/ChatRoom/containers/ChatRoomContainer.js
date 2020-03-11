import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import {
  getAvailableUsersStart,
  getChatRoomInformationStart,
  inviteUserRequest
} from "../actions/chatRoomActions";
import io from "socket.io-client";

const ChatRoomContainer = ({ match }) => {
  const socket = io("http://localhost:3001");

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.userDashBoard.userProfile);
  const { currentChatRoom, availableUsers } = useSelector(
    state => state.chatRoom
  );

  const [chatRoomMessages, addMessage] = useState([]);

  useEffect(() => {
    const { roomId } = match.params;

    dispatch(getChatRoomInformationStart(roomId));
    dispatch(getAvailableUsersStart(currentUser._id));
  }, []);

  useEffect(() => {
    if (!isEmpty(currentChatRoom)) {
      addMessage(currentChatRoom.messages);
    }
  }, [currentChatRoom]);

  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", data => {
      return addMessage([...chatRoomMessages, data]);
    });
  }, [chatRoomMessages]);

  const sendMessage = useCallback(
    message => {
      socket.emit("SEND_MESSAGE", {
        authorId: currentUser._id,
        authorName: currentUser.userName,
        authorAvatar: currentUser.avatar,
        chatId: currentChatRoom._id,
        message: message
      });
    },
    [currentChatRoom, currentUser]
  );

  const onHandleUserInvite = useCallback(payload => {
    dispatch(inviteUserRequest(payload));
  }, []);

  // console.log(chatRoomMessages);

  return (
    <ChatRoom
      chatRoomMessages={chatRoomMessages}
      chatInfo={currentChatRoom}
      currentUser={currentUser}
      userList={availableUsers}
      onHandleUserInvite={onHandleUserInvite}
      sendMessage={sendMessage}
    />
  );
};

ChatRoomContainer.propTypes = {};

export default React.memo(ChatRoomContainer);
