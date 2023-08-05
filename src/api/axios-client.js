import axios from "axios";

const API_URL = "http://103.122.163.148:3000"
const axiosClient = axios.create({
  // api website
  baseURL: API_URL,
  //api emulator
  // baseURL: 'http://10.0.2.2:3000/api',
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
  }
  ,
  (error) => {
    throw error;
  }
);
export default axiosClient;

    //test call api
  // import axiosClient from "../api/axiosClient";
  // const response = await axiosClient.post("/v1/register", {
  //   username,
  //   password,
  //   fullName,
  // });
