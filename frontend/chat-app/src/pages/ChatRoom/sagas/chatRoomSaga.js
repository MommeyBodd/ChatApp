import { put, takeEvery } from "redux-saga/effects";
import * as userDashBoardActions from "../../UserDashboard/actions/userDashBoardActions";
import * as chatActions from "../../ChatRoom/actions/chatRoomActions";
import * as userDashboardApiCalls from "../../UserDashboard/api/userDashboardApi";
import * as chatApi from "../../ChatRoom/api/chatApi";

function* createChatRoom(action) {
  try {
    const response = yield userDashboardApiCalls.createChatRoom(action.payload);
    yield put(userDashBoardActions.createChatRoomSuccess(response.data));
  } catch (error) {
    yield put(userDashBoardActions.createChatRoomFail(error.message));
  }
}

function* getChatRoomInfo(action) {
  try {
    console.log(action.payload);
    const response = yield chatApi.getChatInfo(action.payload);
    console.log(response);
    yield put(chatActions.getChatRoomInformationSuccess(response.data));
  } catch (error) {
    yield put(chatActions.getChatRoomInformationFail(error.message));
  }
}

function* chatRoomSaga() {
  yield takeEvery(userDashBoardActions.createChatRoomRequest, createChatRoom);
  yield takeEvery(chatActions.getChatRoomInformationStart, getChatRoomInfo);
}

export default chatRoomSaga;
