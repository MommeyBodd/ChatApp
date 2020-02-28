import { createAction } from "redux-actions";

export const getUserProfileStart = createAction("GET_USER_PROFILE_START");
export const getUserProfileSuccess = createAction("GET_USER_PROFILE_SUCCESS");
export const getUserProfileFail = createAction("GET_USER_PROFILE_FAIL");
