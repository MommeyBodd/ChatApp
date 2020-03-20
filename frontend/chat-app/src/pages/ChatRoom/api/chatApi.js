import api from "../../../config/apiConfig";

export const getChatInfo = chatId => api.get(`/chats/${chatId}`);

export const getAvailableUsers = currentUserId =>
  api.get(`/users/?userToExclude=${currentUserId}`);

export const inviteUser = body => api.post(`/chats/invitation`, body);
