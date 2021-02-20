import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Button from "components/Button";

const LoginForm = ({ handleSubmit, setUsername, setPassword }) => {
	return (
		<div
			className="flex items-center justify-center min-h-screen
    px-4 py-12 lg:px-8 bg-gray-50 sm:px-6"
		>
			<div className="w-full max-w-md">
				<h2
					className="mt-6 text-3xl font-extrabold leading-9
         text-center text-bb-gray-700"
				>
					Sign In
				</h2>
				<div className="text-center text-sm font-medium">
					Or
					<Link
						to="/signup"
						className="ml-1 mt-2 text-bb-purple
            transition duration-150 ease-in-out focus:outline-none
            focus:underline"
					>
						Register Now
					</Link>
				</div>
				<form className="mt-8" onSubmit={handleSubmit}>
					<Input
						label="Username"
						type="text"
						placeholder="oliver@example.com"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						placeholder="********"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" buttonText="Sign In" />
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
