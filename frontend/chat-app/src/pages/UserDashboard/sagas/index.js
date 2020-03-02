import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import userDashboardSaga from "./userDashboardSaga";
import authSaga from "./authSaga";
import chatSaga from "./chatRoomSaga";

function* rootSaga() {
  yield all([userDashboardSaga(), authSaga(), chatSaga()]);
}

export default rootSaga;
