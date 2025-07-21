import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/badge/",
  // Removed default Content-Type header to allow FormData uploads
});

export default api;

