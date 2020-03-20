import api from "../../../config/apiConfig";

export const getClientProfile = () => api.get("/users/profile");
export const createChatRoom = body => api.post("/chats", body);
