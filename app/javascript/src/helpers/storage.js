const setToLocalStorage = ({ authToken, authUsername, authUserId }) => {
	localStorage.setItem("authToken", authToken);
	localStorage.setItem("authUsername", authUsername);
	localStorage.setItem("authUserId", authUserId);
};

const getFromLocalStorage = (key) => {
	return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
