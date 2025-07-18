import axios from "axios";

// Set your backend base URL here (update as needed for production)
const baseURL = "http://10.73.70.62:8000";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

