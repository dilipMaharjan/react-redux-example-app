import React, { Component } from "react";
import UserList from "../containers/user-list";
class User extends Component {
	render() {
		return (
			<div>
				<p>User Details</p>
				<UserList />
			</div>
		);
	}
}

export default User;
