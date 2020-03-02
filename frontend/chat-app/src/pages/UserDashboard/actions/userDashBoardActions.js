import { createAction } from "redux-actions";

export const getUserProfileStart = createAction("GET_USER_PROFILE_START");
export const getUserProfileSuccess = createAction("GET_USER_PROFILE_SUCCESS");
export const getUserProfileFail = createAction("GET_USER_PROFILE_FAIL");

export const createChatRoomRequest = createAction("CREATE_CHAT_ROOM_REQUEST");
export const createChatRoomSuccess = createAction("CREATE_CHAT_ROOM_SUCCESS");
export const createChatRoomFail = createAction("CREATE_CHAT_ROOM_FAIL");
