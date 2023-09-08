import axiosClient from "../axios-client";

import { ADD_URL, GET_URL } from "./config";
import SharedPreferences from "../../database/share_preferences_helper";
import * as FileSystem from 'expo-file-system';
import { app_api } from "../config";
export const handleAddHotel = async (
  name,
  id_owner,
  address,
  description,
  open_time,
  close_time,
  hotline,
  place,
  images
) => {
  try {
    const imageFiles = [];
    for (const imageUri of images) {
      const imageInfo = await FileSystem.getInfoAsync(imageUri);
      const imageFile = {
        uri: imageUri,
        type: 'image/jpeg', // Adjust the MIME type if necessary
        name: imageInfo.uri.split('/').pop(),
      };
      imageFiles.push(imageFile);

      // Log the image file information
      // console.log('Converted image file:', imageFile);
      // console.log('Converted name file:', imageFile.name);
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('id_owner', id_owner);
    formData.append('address', address);
    formData.append('description', description);
    formData.append('open_time', open_time);
    formData.append('close_time', close_time);
    formData.append('hotline', hotline);
    formData.append('place', place);

    // Append each image file to the FormData as a separate file field
    imageFiles.forEach((file, index) => {
      formData.append('images', file);
    });

    const headers = {
      Authorization: await SharedPreferences.GET_TOKEN(),
      RefreshToken: await SharedPreferences.GET_TOKEN(),
      'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
    };

    const response = await axiosClient.post(`${app_api}/${ADD_URL}`, formData, { headers });
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
    const response = await axiosClient.get(`${app_api}/${GET_URL}`, { headers });
    return response.data; 
  } catch (error) {
    console.log("error hotel-service " + error.message);
    throw error; 
  }
};

