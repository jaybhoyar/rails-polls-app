import React, { useState, useEffect } from "react";

import pollsApi from "apis/polls";

const ShowPoll = () => {
	const { id } = useParams();
	const [pollDetails, setPollDetails] = useState([]);

	const fetchPollDetails = async () => {
		try {
			const response = await pollsApi.show(id);
			setTaskDetails(response.data.task);
			setAssignedUser(response.data.assigned_user);
			setComments(response.data.comments);
		} catch (error) {
			console.log(error);
		} finally {
			setPageLoading(false);
		}
	};
	return <div>Show Poll</div>;
};

export default ShowPoll;
