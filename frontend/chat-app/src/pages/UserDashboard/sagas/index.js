import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import userDashboardSaga from "./userDashboardSaga";

function* rootSaga() {
  yield all([userDashboardSaga()]);
}

export default rootSaga;
