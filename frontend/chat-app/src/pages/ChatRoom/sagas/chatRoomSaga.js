import { put, takeLatest, takeEvery } from "redux-saga/effects";
import * as userDashBoardActions from "../../UserDashboard/actions/userDashBoardActions";
import * as chatActions from "../../ChatRoom/actions/chatRoomActions";
import * as userDashboardApiCalls from "../../UserDashboard/api/userDashboardApi";
import * as chatApi from "../../ChatRoom/api/chatApi";

export function* createChatRoom(action) {
  try {
    const response = yield userDashboardApiCalls.createChatRoom(action.payload);
    yield put(userDashBoardActions.createChatRoomSuccess(response.data));
  } catch (error) {
    yield put(userDashBoardActions.createChatRoomFail(error.message));
  }
}

export function* getChatRoomInfo(action) {
  try {
    const response = yield chatApi.getChatInfo(action.payload);
    yield put(chatActions.getChatRoomInformationSuccess(response.data));
  } catch (error) {
    yield put(chatActions.getChatRoomInformationFail(error.message));
  }
}

export function* getAvailableUsers(action) {
  try {
    const response = yield chatApi.getAvailableUsers(action.payload);
    yield put(chatActions.getAvailableUsersSuccess(response.data));
  } catch (error) {
    yield put(chatActions.getAvailableUsersFail(error.message));
  }
}

export function* inviteUser(action) {
  try {
    const response = yield chatApi.inviteUser(action.payload);
    yield put(chatActions.inviteUserSuccess(response.data));
  } catch (error) {
    yield put(chatActions.inviteUserFail(error.message));
  }
}

function* chatRoomSaga() {
  yield takeEvery(chatActions.getChatRoomInformationStart, getChatRoomInfo);
  yield takeEvery(userDashBoardActions.createChatRoomRequest, createChatRoom);
  yield takeEvery(chatActions.getAvailableUsersStart, getAvailableUsers);
  yield takeEvery(chatActions.inviteUserRequest, inviteUser);
}

export default chatRoomSaga;
