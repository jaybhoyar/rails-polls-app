const setToLocalStorage = ({ authToken, username, userId }) => {
	localStorage.setItem("authToken", authToken);
	localStorage.setItem("authUsername", username);
	localStorage.setItem("authUserId", userId);
};

const getFromLocalStorage = (key) => {
	return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
