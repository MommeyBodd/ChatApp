import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/userDashBoardActions";
import * as userDashboardApi from "../api/userDashboardApi";
import api from "../../../config/apiConfig";
import axios from "axios";

function* getUserProfile(action) {
  const { token, history } = action.payload;
  try {
    yield localStorage.removeItem("token");
    yield (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
    yield (api.defaults.headers.common.Authorization = `Bearer ${token}`);

    const response = yield userDashboardApi.getClientProfile();

    const { userProfile, userChatRooms } = response.data;

    yield put(actions.getUserProfileSuccess({ userProfile, userChatRooms }));

    yield localStorage.setItem(`token`, `Bearer ${token}`);
  } catch (error) {
    yield localStorage.removeItem("token");
    yield delete axios.defaults.headers.common.Authorization;
    yield delete api.defaults.headers.common.Authorization;

    yield put(actions.getUserProfileFail(error));
    yield history.push("/");
  }
}

function* userDashboardSaga() {
  yield takeEvery(actions.getUserProfileStart, getUserProfile);
}

export default userDashboardSaga;
