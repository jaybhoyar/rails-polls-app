import React from "react";
import PropTypes from "prop-types";

const Input = ({
	type = "text",
	label,
	value,
	onChange,
	placeholder,
	styles = "",
	required = true,
}) => {
	return (
		<div className={`mt-4 ${styles}`}>
			{label && (
				<label
					className="block text-xl font-medium
              leading-5 text-gray-600 py-4 tracking-wide"
				>
					{label}
				</label>
			)}
			<div className="rounded-md shadow-sm">
				<input
					type={type}
					required={required}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="block w-full px-3 py-3 placeholder-gray-400
					text-gray-900 tracking-wide text-base font-medium
          transition duration-150 ease-in-out border
          border-gray-300 rounded-md appearance-none
          focus:outline-none focus:shadow-outline-poll-blue
          focus:border-blue-300"
				/>
			</div>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.node,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	required: PropTypes.bool,
};

export default Input;
