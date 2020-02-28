import api from "../../../config/apiConfig";

export const getClientProfile = () => api.get("/user/getUserProfile");
