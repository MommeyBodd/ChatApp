import { combineReducers } from "redux";
import userDashBoard from "../pages/UserDashboard/reducers/userDashBoardReducer";
import chatRoom from "../pages/ChatRoom/reducers/chatRoomReducer";

const rootReducer = combineReducers({ userDashBoard, chatRoom });

export default rootReducer;
