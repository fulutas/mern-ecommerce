import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accesToken;

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  header: { token: `Bearer ${TOKEN}` },
});

export default axiosClient;
