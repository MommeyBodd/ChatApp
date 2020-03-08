import api from "../../../config/apiConfig";

export const getChatInfo = chatId =>
  api.get(`/chat/getChatRoomInfo/:?chatId=${chatId}`);
