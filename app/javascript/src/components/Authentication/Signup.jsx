import React, { useState } from "react";

import SignupForm from "components/Authentication/Form/SignupForm";
// import authApi from "apis/auth";

const Signup = ({ history }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setLoading(true);
			await authApi.signup({
				user: {
					username,
					password,
					password_confirmation: passwordConfirmation,
				},
			});
			setLoading(false);
			history.push("/");
		} catch (error) {
			setLoading(false);
			logger.error(error);
		}
	};

	return (
		<SignupForm
			setUsername={setUsername}
			setPassword={setPassword}
			setPasswordConfirmation={setPasswordConfirmation}
			loading={loading}
			handleSubmit={handleSubmit}
		/>
	);
};

export default Signup;
