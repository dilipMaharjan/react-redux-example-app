// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore, applyMiddleware } from "redux";
const initialState = {
	result: 1,
	lastValue: []
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValue: [...state.lastValue, action.payload]
			};
			state.lastValue.push(action.payload);
			break;
		case "SUBSTRACT":
			state = {
				result: state.result - action.payload,
				lastValue: [...state.lastValue, action.payload]
			};
			break;
		default:
			break;
	}
	return state;
};
const myLogger = store => next => action => {
	console.log("Logged Action: ", action);
	next(action);
};
const store = createStore(reducer, applyMiddleware(myLogger));
store.subscribe(() => {
	console.log("Store updated " + store.getState());
});
store.dispatch({
	type: "ADD",
	payload: 10
});
store.dispatch({
	type: "SUBSTRACT",
	payload: 100
});
