import React from "react";

const Error = ({ errorMessage, setErrorMessage }) => {
	console.log(errorMessage);
	const closeErrorMessage = () => {
		setErrorMessage("");
	};

	return (
		<div className="w-2/3 pb-4">
			<div className="w-full flex justify-between bg-poll-error-bg border border-red-600 px-4 py-4 rounded">
				<span className="w-4/5 text-lg text-poll-error-red">
					{errorMessage}
				</span>
				<span
					className="sm:inline text-poll-error-red cursor-pointer"
					onClick={closeErrorMessage}
				>
					X
				</span>
			</div>
		</div>
	);
};

export default Error;
