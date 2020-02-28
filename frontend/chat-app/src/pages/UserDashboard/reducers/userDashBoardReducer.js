import { handleActions } from "redux-actions";
import * as actions from "../actions/userDashBoardActions";
const initialState = {
  isLoading: false,
  userProfile: {},
  token: null,
  loginError: null,
  isAuth: false,
  errors: null
};

export default handleActions(
  {
    [actions.getUserProfileStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getUserProfileSuccess](state, { payload }) {
      return { ...state, isLoading: false, userProfile: payload };
    },
    [actions.getUserProfileFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    }
  },
  initialState
);
