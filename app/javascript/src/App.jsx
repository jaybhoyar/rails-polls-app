import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
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
