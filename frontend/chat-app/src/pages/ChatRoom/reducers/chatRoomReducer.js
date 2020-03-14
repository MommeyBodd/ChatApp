import { handleActions } from "redux-actions";
import * as actions from "../actions/chatRoomActions";

const initialState = {
  currentChatRoom: {},
  availableUsers: [],
  errors: null
};

export default handleActions(
  {
    [actions.getChatRoomInformationStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getChatRoomInformationSuccess](state, { payload }) {
      return { ...state, currentChatRoom: payload, isLoading: false };
    },
    [actions.getChatRoomInformationFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    },
    [actions.getAvailableUsersStart](state, { payload }) {
      return { ...state, isLoading: true };
    },
    [actions.getAvailableUsersSuccess](state, { payload }) {
      return { ...state, availableUsers: payload, isLoading: false };
    },
    [actions.getAvailableUsersFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    },
    [actions.inviteUserRequest](state, { payload }) {
      return { ...state, isLoading: true };
    },
    [actions.inviteUserSuccess](state, { payload }) {
      return { ...state, currentChatRoom: payload, isLoading: false };
    },
    [actions.inviteUserFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    }
  },
  initialState
);
