import axios from "axios";
axios.defaults.headers = {
	Accept: "applicaion/json",
	"Content-Type": "application/json",
};

export const setAuthHeaders = (setLoading = () => null) => {
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
		axios.defaults.headers["X-Auth-Username"] = username;
		axios.defaults.headers["X-Auth-Token"] = token;
	}
	setLoading(false);
};
