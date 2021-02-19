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
    px-4 py-6 lg:px-8 bg-gray-50 sm:px-6"
		>
			<div className="w-full max-w-md">
				<h2
					className="mt-6 text-3xl font-extrabold leading-9
         text-center text-bb-gray-700"
				>
					New Poll
				</h2>
				<form className="mt-8" onSubmit={handleSubmit}>
					<Input
						label="Question"
						type="test"
						placeholder="Who is the create of rails?"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
					<Input
						label="Option 1"
						type="text"
						placeholder="A"
						value={option1}
						onChange={(e) => setOption1(e.target.value)}
					/>
					<Input
						label="Option 2"
						type="text"
						placeholder="B"
						value={option2}
						onChange={(e) => setOption2(e.target.value)}
					/>
					<Input
						label="Option C"
						type="text"
						placeholder="C"
						value={option3}
						onChange={(e) => setOption3(e.target.value)}
					/>
					<Input
						label="Option D"
						type="text"
						placeholder="D"
						value={option4}
						onChange={(e) => setOption4(e.target.value)}
					/>
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
