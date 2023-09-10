import axios from "axios";

const axiosClient = axios.create({
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

