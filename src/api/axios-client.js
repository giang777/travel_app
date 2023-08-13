import axios from "axios";
const API_URL = "http://103.122.163.148:3000"

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return {data: response.data, status: response.status};

    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;

