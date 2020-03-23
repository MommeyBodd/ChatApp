import { put, takeLatest, takeEvery, all, call } from "redux-saga/effects";
import * as userDashBoardActions from "../../UserDashboard/actions/userDashBoardActions";
import * as chatActions from "../../ChatRoom/actions/chatRoomActions";
import * as userDashboardApiCalls from "../../UserDashboard/api/userDashboardApi";
import * as chatApi from "../../ChatRoom/api/chatApi";

export function* createChatRoom(action) {
  try {
    const response = yield call(
      userDashboardApiCalls.createChatRoom,
      action.payload
    );
    yield put(userDashBoardActions.createChatRoomSuccess(response.data));
  } catch (error) {
    yield put(userDashBoardActions.createChatRoomFail(error.message));
  }
}

export function* getChatRoomInfo(action) {
  try {
    const response = yield call(chatApi.getChatInfo, action.payload);
    yield put(chatActions.getChatRoomInformationSuccess(response.data));
  } catch (error) {
    yield put(chatActions.getChatRoomInformationFail(error));
  }
}

export function* getAvailableUsers(action) {
  try {
    const response = yield chatApi.getAvailableUsers(action.payload);
    yield put(chatActions.getAvailableUsersSuccess(response.data));
  } catch (error) {
    yield put(chatActions.getAvailableUsersFail(error));
  }
}

export function* inviteUser(action) {
  try {
    const response = yield chatApi.inviteUser(action.payload);
    yield put(chatActions.inviteUserSuccess(response.data));
  } catch (error) {
    yield put(chatActions.inviteUserFail(error));
  }
}

export function* createChatRoomWatcher() {
  yield takeEvery(userDashBoardActions.createChatRoomRequest, createChatRoom);
}

export function* getChatRoomInfoWatcher() {
  yield takeEvery(chatActions.getChatRoomInformationStart, getChatRoomInfo);
}

export function* getAvailableUsersWatcher() {
  yield takeEvery(chatActions.getAvailableUsersStart, getAvailableUsers);
}

export function* inviteUserWatcher() {
  yield takeEvery(chatActions.inviteUserRequest, inviteUser);
}

function* chatRoomSagas() {
  yield all([
    createChatRoomWatcher(),
    getChatRoomInfoWatcher(),
    getAvailableUsersWatcher(),
    inviteUserWatcher()
  ]);
}

export default chatRoomSagas;
