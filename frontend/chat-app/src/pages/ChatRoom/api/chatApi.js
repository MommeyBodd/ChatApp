import api from "../../../config/apiConfig";

export const getChatInfo = chatId =>
  api.get(`/chat/getChatRoomInfo:?chatId=${chatId}`);

export const getAvailableUsers = currentUserId =>
  api.get(`/user/getAllUsers:?currentUserId=${currentUserId}`);

export const inviteUser = body => api.post(`/chat/inviteUser`, body);
