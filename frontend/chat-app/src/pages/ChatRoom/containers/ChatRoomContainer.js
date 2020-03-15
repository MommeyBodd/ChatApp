import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import {
  getAvailableUsersStart,
  getChatRoomInformationStart,
  inviteUserRequest
} from "../actions/chatRoomActions";
import io from "socket.io-client";
import { logout } from "../../UserDashboard/actions/authActions";
import { baseURL } from "../../../config/apiConfig";
import {
  RECEIVE_MESSAGE,
  SEND_MESSAGE
} from "../../../constants/socketConstants";

const ChatRoomContainer = ({ match, history }) => {
  const socket = io(baseURL);

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.userDashBoard.userProfile);
  const { currentChatRoom, availableUsers, isLoading } = useSelector(
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
    socket.on(RECEIVE_MESSAGE, data => {
      if (data.chatId === currentChatRoom._id) {
        return addMessage([...chatRoomMessages, data]);
      }
    });
  }, [chatRoomMessages]);

  const sendMessage = useCallback(
    message => {
      socket.emit(SEND_MESSAGE, {
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

  const onHandleLogout = useCallback(() => dispatch(logout({ history })), []);

  return (
    <ChatRoom
      chatRoomMessages={chatRoomMessages}
      chatInfo={{ ...currentChatRoom, isLoading }}
      currentUser={currentUser}
      userList={availableUsers}
      onHandleUserInvite={onHandleUserInvite}
      sendMessage={sendMessage}
      onHandleLogout={onHandleLogout}
    />
  );
};

export default React.memo(ChatRoomContainer);
