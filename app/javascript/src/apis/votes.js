import axios from "axios";

const create = (payload) => axios.post("/polls", payload);

const pollsApi = {
	list,
	show,
	create,
};

export default pollsApi;
