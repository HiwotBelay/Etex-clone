import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.36:8000/api/",
  // Removed default Content-Type header to allow FormData uploads
});

export default api;

