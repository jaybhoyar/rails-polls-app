import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import pollsApi from "apis/polls";
import votesApi from "apis/votes";

const ShowPoll = () => {
	const { id } = useParams();
	const [pollQuestion, setPollQuestion] = useState("");
	const [pollOptions, setPollOptions] = useState([]);

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
			const res = await votesApi.create({
				vote: { poll_id: id, option_id: optionId },
			});
			console.log(res.data);
			fetchPollDetails();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPollDetails();
	}, []);

	return (
		<div
			className="flex items-center justify-center
    px-4 py-6 lg:px-8 bg-gray-50 sm:px-6"
		>
			<div className="w-full max-w-md">
				<h1 className="pb-3 mt-5 mb-3 text-lg leading-5 font-bold text-center">
					{pollQuestion}
				</h1>
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
					{pollOptions.map((option, index) => (
						<li
							className="cursor-pointer"
							key={index}
							onClick={() => handleVote(option.id)}
						>
							<a className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
								<dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
									<dd className="group-hover:text-white leading-6 font-medium text-black">
										{option.value}
									</dd>
									<dd className="group-hover:text-white text-sm leading-6 font-light text-gray-600">
										{option.vote_count}
									</dd>
								</dl>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ShowPoll;
