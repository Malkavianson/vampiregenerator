import axios from "axios";

export const api = axios.create({
	baseURL: "https://vtmgenerator.herokuapp.com/",
});
// export const api = axios.create({ baseURL: "http://localhost:3333" });
