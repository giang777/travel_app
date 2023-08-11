import axiosClient from "../axios-client";

import { ADD_URL, GET_URL } from "./config";
import SharedPreferences from "../../database/share_preferences_helper";

export const handleAddHotel = async (
  name,
  id_owner,
  address,
  description,
  open_time,
  close_time,
  hotline,
  place
) => {
  try {
    const headers = {
      Authorization: await SharedPreferences.GET_TOKEN(),
      RefreshToken: await SharedPreferences.GET_TOKEN(),
    };
    const response = await axiosClient.post(
      `/${ADD_URL}`,
      {
        name,
        id_owner,
        address,
        description,
        open_time,
        close_time,
        hotline,
        place,
      },
      { headers }
    );
    return response.status;
  } catch (error) {
    console.log(`error hotel-service: ${error.message}`);
  }
};

export const handleGetHotel = async () => {
  try {
    const headers = {
      Authorization: await SharedPreferences.GET_TOKEN(),
      RefreshToken: await SharedPreferences.GET_TOKEN(),
    };
    const response = await axiosClient.get(`/${GET_URL}`, { headers });
    return response.data; 
  } catch (error) {
    console.log("error hotel-service " + error.message);
    throw error; 
  }
};

