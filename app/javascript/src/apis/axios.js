import axios from "axios";

export const setAuthHeaders = () => {
	axios.defaults.headers = {
		Accept: "applicaion/json",
		"Content-Type": "application/json",
		"X-CSRF-TOKEN": document
			.querySelector('[name="csrf-token"]')
			.getAttribute("content"),
	};
	const token = localStorage.getItem("authToken");
	const username = localStorage.getItem("authUsername");

	if (token && username) {
		console.log(token, username);
		axios.defaults.headers["X-Auth-Username"] = username;
		axios.defaults.headers["X-Auth-Token"] = token;
	}
};

export const resetAuthTokens = () => {
	delete axios.defaults.headers["X-Auth-Username"];
	delete axios.defaults.headers["X-Auth-Token"];
};
