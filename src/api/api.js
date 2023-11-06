// api.js
import axios from "axios";

export const API_BASE_URL = "http://localhost:5000/api/v1";

export const fetchJobs = async () => {
  const response = await axios.get(`${API_BASE_URL}/user/jobs`);
  return response.data;
};
export const fetchSingleJob = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/user/jobs/${id}`);
  return response.data;
};
