import api from "../../../config/apiConfig";

export const getChatInfo = chatId => api.get(`/chat/getChatRoomInfo/${chatId}`);

export const getAvailableUsers = currentUserId =>
  api.get(`/user/getAllUsers/${currentUserId}`);

export const inviteUser = body => api.post(`/chat/inviteUser`, body);
