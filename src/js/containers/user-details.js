import React, { Component } from "react";
import { connect } from "react-redux";
class UserDetail extends Component {
	render() {
		if (!this.props.user) {
			return <h2>Select a user ...</h2>;
		}
		return (
			<div>
				<h2>User Detail</h2>
				<p>
					Name: {this.props.user.first} {this.props.user.last}
				</p>
				<p>Age:{this.props.user.age}</p>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		user: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail);
