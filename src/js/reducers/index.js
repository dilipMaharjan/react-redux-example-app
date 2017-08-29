import { combineReducers } from "redux";
import UserReducer from "./user-reducer";
import UserInterests from "./user-interests";
import ActiveUser from "./user-details-reducer";
const allReducers = combineReducers({
	users: UserReducer,
	interests: UserInterests,
	activeUser: ActiveUser
});

export default allReducers;
