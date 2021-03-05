import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const PollForm = ({
	question,
	option1,
	option2,
	option3,
	option4,
	setQuestion,
	setOption1,
	setOption2,
	setOption3,
	setOption4,
	handleSubmit,
}) => {
	return (
		<div
			className="flex items-center justify-center
    px-4 py-5 lg:px-8 bg-gray-50 sm:px-6"
		>
			<div className="w-3/5">
				<h2
					className="mt-4 text-3xl font-extrabold leading-9 tracking-wide
         text-center text-bb-gray-700"
				>
					New Poll
				</h2>
				<form className="mt-6" onSubmit={handleSubmit}>
					<Input
						styles="w-full"
						label="Question"
						type="test"
						placeholder="Who is the create of rails?"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
					<div className="flex justify-between">
						<Input
							styles="w-1/2 mr-6"
							label="Option 1"
							type="text"
							placeholder="A"
							value={option1}
							onChange={(e) => setOption1(e.target.value)}
						/>

						<Input
							styles="w-1/2"
							label="Option 2"
							type="text"
							placeholder="B"
							value={option2}
							onChange={(e) => setOption2(e.target.value)}
						/>
					</div>
					<div className="flex justify-between">
						<Input
							styles="w-1/2 mr-6"
							label="Option C"
							type="text"
							placeholder="C"
							value={option3}
							onChange={(e) => setOption3(e.target.value)}
						/>
						<Input
							styles="w-1/2"
							label="Option D"
							type="text"
							placeholder="D"
							value={option4}
							onChange={(e) => setOption4(e.target.value)}
						/>
					</div>
					<Button
						type="submit"
						buttonText="Create Poll"
						onClick={handleSubmit}
					/>
				</form>
			</div>
		</div>
	);
};

export default PollForm;
