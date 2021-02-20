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
    px-4 py-6 lg:px-8 bg-gray-50 sm:px-6"
		>
			<div className="w-full max-w-md">
				<h2
					className="my-6 text-3xl font-extrabold leading-9
         text-center text-bb-gray-700"
				>
					New Poll
				</h2>
				<div>
					{polls.map((poll, index) => (
						<Link key={index} to={`/polls/${poll.id}/show`}>
							<p
								className="
							shadow my-4 px-6 py-4 text-m font-medium leading-5 whitespace-no-wrap text-bb-purple"
							>
								{poll.question}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListPolls;
