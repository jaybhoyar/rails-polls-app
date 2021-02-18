import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</Router>
	);
};

// export default App;

export default App;
