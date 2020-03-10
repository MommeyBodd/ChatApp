import { combineReducers } from "redux";
import userDashBoard from "../pages/UserDashboard/reducers/userDashBoardReducer";
import chatRoom from "../pages/ChatRoom/reducers/chatRoomReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["chatRoom"]
};

const rootReducer = combineReducers({ userDashBoard, chatRoom });

export default persistReducer(persistConfig, rootReducer);
