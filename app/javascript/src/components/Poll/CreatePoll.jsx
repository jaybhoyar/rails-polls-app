import React, { useState, useEffect } from "react";

import PollForm from "./Form/PollForm";
import NavBar from "components/NavBar";

// import PageLoader from "components/PageLoader";
import pollsApi from "apis/polls";
// import usersApi from "apis/users";

const CreatePoll = ({ history }) => {
	const [question, setQuestion] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await pollsApi.create({
				poll: {
					question,
					options_attributes: [
						{ value: option1 },
						{ value: option2 },
						{ value: option3 },
						{ value: option4 },
					],
				},
			});
			// setLoading(false);
			console.log("POlls", res.data);
			history.push("/");
		} catch (error) {
			console.log(error);
			// setLoading(false);
		}
	};

	// const fetchUserDetails = async () => {
	// 	try {
	// 		const response = await usersApi.list();

	// 		setUsers(response.data.users);
	// 		setUserId(response.data.users[0].id);
	// 		setPageLoading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 		setPageLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchUserDetails();
	// }, []);

	return (
		<div>
			<PollForm
				question={question}
				option1={option1}
				option2={option2}
				option3={option3}
				option4={option4}
				setQuestion={setQuestion}
				setOption1={setOption1}
				setOption2={setOption2}
				setOption3={setOption3}
				setOption4={setOption4}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default CreatePoll;
