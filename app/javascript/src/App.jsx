import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { either, isEmpty, isNil } from "ramda";

import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard";
import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";
import CreatePoll from "components/Poll/CreatePoll";
import ShowPoll from "components/Poll/ShowPoll";
import NavBar from "components/NavBar";
import { getFromLocalStorage } from "helpers/storage";

import { setAuthHeaders } from "apis/axios";

const App = () => {
	const authToken = getFromLocalStorage("authToken");
	const isUserLoggedIn =
		!either(isNil, isEmpty)(authToken) && authToken !== "null";

	useEffect(() => {
		setAuthHeaders();
	}, []);

	return (
		<Router>
			<NavBar isUserLoggedIn={isUserLoggedIn} />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/polls/:id/show" component={ShowPoll} />
				<PrivateRoute
					path="/create"
					redirectRoute="/login"
					condition={isUserLoggedIn}
					component={CreatePoll}
				/>
			</Switch>
		</Router>
	);
};

export default App;
