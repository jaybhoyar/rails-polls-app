import React, { useState, useEffect } from "react";

import NavBar from "components/NavBar";
import ListPolls from "components/Poll/ListPolls";

const Dashboard = () => {
	return (
		<div>
			<ListPolls />
		</div>
	);
};

export default Dashboard;
