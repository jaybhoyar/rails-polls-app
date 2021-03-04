import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pollsApi from "apis/polls";

// import Table from "./Table";

const ListPolls = () => {
	const [polls, setPolls] = useState([]);

	const fetchPolls = async () => {
		try {
			const response = await pollsApi.list();
			console.log(response.data.polls);
			setPolls(response.data.polls);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPolls();
	}, []);

	return (
		<div
			className="flex items-center justify-center
    px-4 py-6 lg:px-8 sm:px-6"
		>
			<div className="w-full">
				<h2
					className="my-3 text-5xl leading-9
         text-center text-bb-gray-700"
				>
					Polls
				</h2>
				<div className="flex px-4 flex-wrap inline-flex	">
					{polls.map((poll, index) => (
						<Link
							key={index}
							to={`/polls/${poll.id}/show`}
							className="rounded-md shadow-lg my-6 mx-4 px-6 py-6 text-lg font-bold text-gray-600 leading-5 bg-white"
						>
							{poll.question}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListPolls;
