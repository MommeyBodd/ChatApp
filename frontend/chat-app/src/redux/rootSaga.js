import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import userDashboardSagas from "../pages/UserDashboard/sagas/index";

function* rootSaga() {
  yield all([userDashboardSagas()]);
}

export default rootSaga;
