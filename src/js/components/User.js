import React, { Component } from "react";
import UserList from "../containers/user-list";
import InterestList from "../containers/interest-list";
import UserDetail from "../containers/user-details";
class User extends Component {
	render() {
		return (
			<div>
				<p>User List</p>
				<UserList />
				<p>User Interests</p>
				<InterestList />
				<UserDetail />
			</div>
		);
	}
}

export default User;
