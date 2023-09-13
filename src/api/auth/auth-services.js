//login api in here

import SharedPreferences from "../../database/share_preferences_helper";
import axiosClient from "../axios-client";
import { app_api } from "../config";
import { LOGIN_URL, LOGOUT_URL } from "./config";

export const handleLogOut = async () => {
  try {
    const response = await axiosClient.post(`${app_api}/${LOGOUT_URL}`, {
      token: await SharedPreferences.GET_TOKEN(),
    });
    return response.status;
  } catch (error) {
    console.log(`error auth-service: ${error.message}`);
  }
};

export const handleLogIn = async (username, password) => {
  try {
    const response = await axiosClient.post(`${app_api}/${LOGIN_URL}`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(`error login auth-service: ${error.message}`);

  }
};




