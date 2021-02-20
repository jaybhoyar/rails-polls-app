import React, { useState, useEffect } from "react";

import NavBar from "components/NavBar";
import ListPolls from "components/Poll/ListPolls";



const Dashboard = () => {
	return (
		<div>
			<NavBar />
			<h1>This is Dashboard</h1>
			<ListPolls />
		</div>
	);
};

export default Dashboard;
