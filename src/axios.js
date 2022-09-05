import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:user"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accesToken;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjNiMTgxNWRjNTQ1ZDYwM2U2Njk2YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjIzNzI3OTcsImV4cCI6MTY2MjYzMTk5N30.jqnnjt4l5Io9u1mlLJ10km93S5NEO8gXez8uJkC3Fi4'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  header: { token: `Bearer ${TOKEN}` },
});

export default axiosClient;
