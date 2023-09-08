import axiosClient from "../axios-client"
import { province_api } from "../config"
import { GET_DISTRICT, GET_PROVINCE, GET_WARD } from "./config"

export const handleGetProvinces = async() =>{
    try {
        const response  = await axiosClient.get(`${province_api}/${GET_PROVINCE}`)
        return response;
    } catch (e) {
        console.log(`error province-service: ${error.message}`);

    }
}
export const handleGetDistricts = async() =>{

  try {
        const response  = await axiosClient.get(`${province_api}/${GET_DISTRICT}`)
        return response;
    } catch (e) {
        console.log(`error district-service: ${error.message}`);

    }
}
export const handleGetWards= async() =>{

  try {
        const response  = await axiosClient.get(`${province_api}/${GET_WARD}`)
        return response;
    } catch (e) {
        console.log(`error ward-service: ${error.message}`);

    }
}