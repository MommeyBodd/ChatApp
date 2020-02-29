import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/authActions";
import * as generalActions from "../actions/userDashBoardActions";
import api from "../../../config/apiConfig";

function* logout(action) {
  const { history } = action.payload;

  yield localStorage.removeItem("token");
  yield delete axios.defaults.headers.common.Authorization;
  yield delete api.defaults.headers.common.Authorization;
  yield history.push("/");
}

function* authSaga() {
  yield takeEvery(actions.logout, logout);
}

export default authSaga;
