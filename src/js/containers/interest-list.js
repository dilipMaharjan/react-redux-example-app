import React, { Component } from "react";
import { connect } from "react-redux";
class InterestList extends Component {
	createInterestList() {
		return this.props.interests.map((interest, i) => {
			return <li key={i}>{interest.interest}</li>;
		});
	}
	render() {
		return <ol>{this.createInterestList()}</ol>;
	}
}
function mapStateToProps(state) {
	return {
		interests: state.interests
	};
}
export default connect(mapStateToProps)(InterestList);
