import { handleActions } from "redux-actions";
import * as actions from "../actions/userDashBoardActions";
import * as authActions from "../actions/authActions";
const initialState = {
  isLoading: false,
  isAuth: false,
  userProfile: {},
  errors: null
};

export default handleActions(
  {
    [actions.getUserProfileStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getUserProfileSuccess](state, { payload }) {
      return { ...state, isLoading: false, userProfile: payload, isAuth: true };
    },
    [actions.getUserProfileFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload, isAuth: false };
    },
    [authActions.logout](state) {
      return { ...state, isAuth: false };
    }
  },
  initialState
);
