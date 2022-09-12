import axios from "axios";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:user"))?.currentUser)?.accesToken;

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: { token: `Bearer ${TOKEN}` },
});

export default axiosClient;
