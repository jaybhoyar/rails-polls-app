import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Error from "components/Error";
import pollsApi from "apis/polls";
import votesApi from "apis/votes";

const ShowPoll = () => {
	const { id } = useParams();
	const [pollQuestion, setPollQuestion] = useState("");
	const [pollOptions, setPollOptions] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchPollDetails = async () => {
		try {
			const response = await pollsApi.show(id);
			setPollQuestion(response.data.poll.question);
			setPollOptions(response.data.options);
		} catch (error) {
			console.log(error);
		}
	};

	const handleVote = async (optionId) => {
		try {
			await votesApi.create({
				vote: { poll_id: id, option_id: optionId },
			});
			fetchPollDetails();
		} catch (error) {
			setErrorMessage(error.response.data.notice);
		}
	};

	useEffect(() => {
		fetchPollDetails();
		calculateTotalVotes();
	}, []);

	function calculateTotalVotes() {
		let votes = pollOptions.reduce((acc, cv) => {
			return acc + cv.vote_count;
		}, 0);
		return votes;
	}

	return (
		<div className="w-full flex items-center justify-around pl-28 py-10">
			<div className="w-1/2">
				<div className="flex w-2/3 justify-between items-center">
					<h1 className="pb-3 mt-8 mb-6 text-3xl leading-9 font-bold text-left tracking-wide flex-wrap">
						{pollQuestion}
					</h1>
					{pollOptions && (
						<span className="font-bold text-base text-gray-500 mr-3">
							{calculateTotalVotes()} votes
						</span>
					)}
				</div>
				{errorMessage ? (
					<Error
						errorMessage={errorMessage}
						setErrorMessage={setErrorMessage}
					/>
				) : null}
				<ul>
					{pollOptions.map((option, index) => (
						<li
							className="cursor-pointer w-2/3 bg-white border-2 border-transparent hover:border-poll-green shadow-lg block rounded-md py-6 px-6 mb-6"
							key={index}
							onClick={() => handleVote(option.id)}
						>
							<div className="pl-3 flex items-center justify-between">
								<span className="leading-6 font-medium text-xl">
									{option.value}
								</span>
								<span className="leading-6 font-medium text-lg text-gray-500">
									{option.vote_count}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ShowPoll;
