import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/authActions";
import api from "../../../config/apiConfig";

const logOut = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common.Authorization;
  delete api.defaults.headers.common.Authorization;
};

function* login(action) {
  try {
    console.log(action.payload);
  } catch (e) {
    console.log(e);
  }

  yield put(actions.loginSuccess());
}

function* authSaga() {
  yield takeEvery(actions.logout, logOut);
  yield takeEvery(actions.login, login);
}

export default authSaga;
