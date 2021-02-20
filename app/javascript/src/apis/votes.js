import axios from "axios";

const create = (payload) => axios.post("/votes", payload);

const votesApi = {
	create,
};

export default votesApi;
