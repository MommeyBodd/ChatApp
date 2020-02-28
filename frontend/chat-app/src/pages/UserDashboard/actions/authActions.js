import { createAction } from "redux-actions";

export const logout = createAction("LOGOUT");

export const login = createAction("LOGIN");
export const loginSuccess = createAction("LOGIN_SUCCESS");
