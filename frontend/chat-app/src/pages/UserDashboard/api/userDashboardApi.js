import api from "../../../config/apiConfig";

export const getClientProfile = () => api.get("/user/getUserProfile");
export const createChatRoom = body => api.post("/chat/createChatRoom", body);
