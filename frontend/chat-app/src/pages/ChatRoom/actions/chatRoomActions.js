import { createAction } from "redux-actions";

export const getChatRoomInformationStart = createAction(
  "GET_CHAT_ROOM_INFORMATION_START"
);
export const getChatRoomInformationSuccess = createAction(
  "GET_CHAT_ROOM_INFORMATION_SUCCESS"
);
export const getChatRoomInformationFail = createAction(
  "GET_CHAT_ROOM_INFORMATION_FAIL"
);
