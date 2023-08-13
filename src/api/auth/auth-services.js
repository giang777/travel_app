//login api in here

import SharedPreferences from "../../database/share_preferences_helper";
import axiosClient from "../axios-client";
import { LOGIN_URL, LOGOUT_URL } from "./config";

export const handleLogOut = async () => {
  try {
    const response = await axiosClient.post(`/${LOGOUT_URL}`, {
      token: await SharedPreferences.GET_TOKEN(),
    });
    return response.status;
  } catch (error) {
    console.log(`error auth-service: ${error.message}`);
  }
};

export const handleLogIn = async (username, password) => {
  try {
    const response = await axiosClient.post(`/${LOGIN_URL}`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(`error login auth-service: ${error.message}`);

  }
};




