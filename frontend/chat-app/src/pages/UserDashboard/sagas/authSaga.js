// import { takeEvery } from "redux-saga/effects";
// import axios from "axios";
// import * as actions from "../actions/authActions";
// import api from "../../../config/apiConfig";
//
// const logOut = () => {
//   localStorage.removeItem("token");
//   delete axios.defaults.headers.common.Authorization;
//   delete api.defaults.headers.common.Authorization;
// };
//
// const login = action => {
//   localStorage.removeItem("token");
//   axios.defaults.headers.common.Authorization = `Bearer ${action.payload}`;
//   api.defaults.headers.common.Authorization = `Bearer ${action.payload}`;
// };
//
// function* authSaga() {
//   yield takeEvery(actions.logout, logOut);
//   yield takeEvery(actions.login, login);
// }
//
// export default authSaga;
