import axiosClient from "../axios-client";

import { GET_URL } from "./config";
import SharedPreferences from "../../database/share_preferences_helper";
import { app_api } from "../config";

const handleGetRoom = async ()=>{
    try {
        const headers = {
            Authorization: await SharedPreferences.GET_TOKEN(),
            RefreshToken: await SharedPreferences.GET_TOKEN(),
            'Content-Type': 'application/json', 
        };

        const response = await axiosClient.get(`${app_api}/${GET_URL}`,{ headers });
        return response.data;
    } catch (error) {
        console.log("Err",error);
    }
}

const handleAddRoom = async (params)=>{
    try {
        const headers = {
            Authorization: await SharedPreferences.GET_TOKEN(),
            RefreshToken: await SharedPreferences.GET_TOKEN(),
            'Content-Type': 'application/json', 
        };

        const response = await axiosClient.post(`${app_api}/${GET_URL}`, params, { headers });
        return response;
    } catch (error) {
        console.log("Err",error);
    }
}

export {handleGetRoom,handleAddRoom}