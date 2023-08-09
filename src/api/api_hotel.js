import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = "http://103.122.163.148:3000"
const axiosHotel = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});
axiosHotel.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('REFRESH_TOKEN');
    config.headers.Authorization = `${token}`;
    config.headers.Refreshtoken = `${token}`
    return config;
});
axiosHotel.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return { data: response.data, status: response.status };
        }
        return response;
    },
    (error) => {
        throw error;
    }
);
export default axiosHotel;
