import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import userDashboardSaga from "./userDashboardSaga";
import authSaga from "./authSaga";

function* rootSaga() {
  yield all([userDashboardSaga(), authSaga()]);
}

export default rootSaga;
