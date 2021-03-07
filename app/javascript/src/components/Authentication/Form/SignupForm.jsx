import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Button from "components/Button";
const SignupForm = ({
	handleSubmit,
	setUsername,
	setPassword,
	setPasswordConfirmation,
	loading,
}) => {
	return (
		<div
			className="flex pt-12 justify-center min-h-screen px-8"
		>
			<div className="w-full max-w-md">
				<h2
					className="mt-6 text-3xl font-extrabold leading-9
        text-center text-bb-gray-700"
				>
					Sign Up
				</h2>
				<div className="text-center text-center text-sm font-medium">
					Or
					<Link
						to="/login"
						className="ml-1 mt-2 text-center
            text-poll-blue transition duration-150 ease-in-out
            focus:outline-none focus:underline"
					>
						Login Now
					</Link>
				</div>
				<form className="mt-8" onSubmit={handleSubmit}>
					<Input
						label="Username"
						type="text"
						placeholder="Oliver"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						type="password"
						label="Password"
						placeholder="********"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						type="password"
						label="Password Confirmation"
						placeholder="********"
						onChange={(e) =>
							setPasswordConfirmation(e.target.value)
						}
					/>
					<Button
						type="submit"
						buttonText="Register"
						loading={loading}
					/>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
