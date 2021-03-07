import axios from "axios";

const list = () => axios.get("/polls");

const show = (id) => axios.get(`/polls/${id}`);

const create = (payload) => axios.post("/polls", payload);

const pollsApi = {
	list,
	show,
	create,
};

export default pollsApi;
