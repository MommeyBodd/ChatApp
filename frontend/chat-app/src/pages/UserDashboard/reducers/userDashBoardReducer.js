import { handleActions } from "redux-actions";
import * as actions from "../actions/userDashBoardActions";
import * as authActions from "../actions/authActions";
const initialState = {
  isLoading: false,
  isAuth: false,
  userProfile: {},
  userChatRooms: [],
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
    },
    [actions.createChatRoomRequest](state) {
      return { ...state, isLoading: true };
    },
    [actions.createChatRoomSuccess](state, { payload }) {
      return {
        ...state,
        userChatRooms: [...state.userChatRooms, payload],
        isLoading: false
      };
    },
    [actions.createChatRoomFail](state, { payload }) {
      return { ...state, errors: payload, isLoading: false };
    }
  },
  initialState
);
