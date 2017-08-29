import { combineReducers } from "redux";
import UserReducer from "./user-reducer";
import UserInterests from "./user-interests";
const allReducers = combineReducers({
	users: UserReducer,
	interests: UserInterests
});

export default allReducers;
