import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/user-actions";
class UserList extends Component {
	createUserListItems() {
		return this.props.users.map((user, i) => {
			return (
				<li key={i} onClick={() => this.props.selectUser(user)}>
					{user.first} {user.last}
					{console.log(this.props.interests)}
				</li>
			);
		});
	}
	render() {
		return <ol>{this.createUserListItems()}</ol>;
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
		interests: state.interests
	};
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			selectUser: selectUser
		},
		dispatch
	);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
