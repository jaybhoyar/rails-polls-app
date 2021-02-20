import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";
import CreatePoll from "components/Poll/CreatePoll";
import ShowPoll from "components/Poll/ShowPoll";
import NavBar from "components/NavBar";

import { setAuthHeaders } from "apis/axios";

const App = () => {
	useEffect(() => {
		setAuthHeaders();
	}, []);

	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/create" component={CreatePoll} />
				<Route exact path="/polls/:id/show" component={ShowPoll} />

				{/* <PrivateRoute
					path="/"
					redirectRoute="/login"
					condition={isLoggedIn}
					component={Dashboard}
				/> */}
			</Switch>
		</Router>
	);
};

export default App;
