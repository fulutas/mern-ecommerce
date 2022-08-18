import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjM5MGU2NWYyMmE0ZWI0YmZhZmEyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDgxMzc0OSwiZXhwIjoxNjYxMDcyOTQ5fQ.MIgWejX15v__kRDz7f2LSYK4pu8vA6hCITgKOwc-mO8";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  header: { token: `Bearer ${TOKEN}` },
});

export default axiosClient;
