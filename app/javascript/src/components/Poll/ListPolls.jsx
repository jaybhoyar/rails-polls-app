import React, { useEffect, useState } from "react";
import pollsApi from "apis/polls";

const ListPolls = () => {
	const [polls, setPolls] = useState([]);

	const fetchPolls = async () => {
		try {
			const response = await pollsApi.list();
			console.log(response.data);
			// setPolls(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPolls();
	}, []);

	return <div>Polls Here:</div>;
};

export default ListPolls;
