import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/userDashBoardActions";
import * as apiCalls from "../api/userDashboardApi";

function* createChatRoom(action) {
  console.log(action.payload);
  try {
    const response = yield apiCalls.createChatRoom(action.payload);
    yield put(actions.createChatRoomSuccess(response.data));
  } catch (error) {
    yield put(actions.createChatRoomFail(error.message));
  }
}

function* chatRoomSaga() {
  yield takeEvery(actions.createChatRoomRequest, createChatRoom);
}

export default chatRoomSaga;
