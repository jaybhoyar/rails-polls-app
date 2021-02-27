import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", buttonText, onClick }) => {
	return (
		<div className="mt-6">
			<button
				type={type}
				onClick={onClick}
				className="relative flex justify-center w-full px-4 py-2 
        text-sm font-medium leading-5 text-white transition duration-150
         ease-in-out bg-bb-purple border border-transparent rounded-md 
         group hover:bg-opacity-90 focus:outline-none"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
