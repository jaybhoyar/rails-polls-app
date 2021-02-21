import React, { useState } from "react";

import LoginForm from "components/Authentication/Form/LoginForm";
import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";
import { setToLocalStorage } from "helpers/storage";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await authApi.login({
				login: { username, password },
			});
			console.log(response.data);
			setToLocalStorage({
				authToken: response.data.auth_token,
				authUsername: username,
				authUserId: response.data.userId,
			});
			setAuthHeaders();
			setLoading(false);
			window.location.href = "/";
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<LoginForm
			setUsername={setUsername}
			setPassword={setPassword}
			handleSubmit={handleSubmit}
		/>
	);
};

export default Login;
