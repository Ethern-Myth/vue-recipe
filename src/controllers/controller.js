import axios from "axios";

const API_URL = "http://localhost:3000/recipes";

// GET recipes
export const GET_Recipes = async () => {
	const res = await axios.get(API_URL);
	const data = res.data;
	return data;
};

// GET recipes/1
export const GET_Recipe_BY_id = async (id) => {
	const res = await axios.get(`${API_URL}/${id}`);
	const data = res.data;
	return data;
};

// POST recipes
export const POST_Recipe = async (form) => {
	try {
		await axios.post(API_URL, form, {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
	}
};

// PUT recipes/1
export const PUT_Recipe = async (id, form) => {
	try {
		await axios.put(`${API_URL}/${id}`, form, {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
	}
};

// DELETE recipes/1
export const DELETE_Recipe = async (id) => {
	const res = await axios.delete(`${API_URL}/${id}`);
	const data = res.data;
	return data;
};
