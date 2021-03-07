import React, { useState } from "react";

import PollForm from "./Form/PollForm";
import pollsApi from "apis/polls";

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
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

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
