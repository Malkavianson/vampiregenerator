import axios from "axios";

export const api = axios.create({
	baseURL: "https://vtmgenerator.herokuapp.com/",
});
// export const api = axios.create({ baseURL: process.env.REACT_APP_DATABASE_URL });
