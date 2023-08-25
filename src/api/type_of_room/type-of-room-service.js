import SharedPreferences from "../../database/share_preferences_helper";
import axiosClient from "../axios-client";
import { ADD_URL } from "./config";

export const handleAddTOR = async (name, price, slot) => {
  try {
    const headers = {
      Authorization: await SharedPreferences.GET_TOKEN(),
      RefreshToken: await SharedPreferences.GET_TOKEN(),
    };
    const response = await axiosClient.post(
      `/${ADD_URL}`,
      {
        name,
        price,
        slot,
      },
      {headers}
    );
    return response;
  } catch (error) {
    console.log(`error type-of-room-service: ${error.message}`);
    console.log('API Request Payload:', {
        name: name,
        price:price,
        slot: slot,
      });
      
  }
};
