import { handleActions } from "redux-actions";
import * as actions from "../actions/chatRoomActions";

const initialState = {
  currentChatRoom: {},
  errors: null
};

export default handleActions(
  {
    [actions.getChatRoomInformationStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getChatRoomInformationSuccess](state, { payload }) {
      console.log(payload);
      return { ...state, isLoading: false, currentChatRoom: payload };
    },
    [actions.getChatRoomInformationFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    }
  },
  initialState
);
