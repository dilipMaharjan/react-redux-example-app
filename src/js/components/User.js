import React, { Component } from "react";
import UserList from "../containers/user-list";
import InterestList from "../containers/interest-list";
class User extends Component {
	render() {
		return (
			<div>
				<p>User Details</p>
				<UserList />
				<p>User Interests</p>
				<InterestList />
			</div>
		);
	}
}

export default User;
