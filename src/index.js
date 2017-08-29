import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//curly braces wrap indicates only import single function or variable or just signle thing
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./js/reducers";

//creates store which can take only an object
const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
