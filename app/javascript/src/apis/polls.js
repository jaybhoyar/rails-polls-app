import axios from "axios";

// const list = () => axios.get("/tasks");

// const show = (id) => axios.get(`/tasks/${id}`);

const create = (payload) => axios.post("/polls", payload);

// const update = ({ id, payload }) => axios.put(`/tasks/${id}`, payload);

// const destroy = (id) => axios.delete(`/tasks/${id}`);

const pollsApi = {
	// list,
	// show,
	create,
	// update,
	// destroy,
};

export default pollssApi;
