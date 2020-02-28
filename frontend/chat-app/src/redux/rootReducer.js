import { combineReducers } from "redux";
import userDashBoard from "../pages/UserDashboard/reducers/userDashBoardReducer";

const rootReducer = combineReducers({ userDashBoard });

export default rootReducer;
