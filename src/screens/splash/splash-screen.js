import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { IconAssets } from "../../utils/app-assets";
import { StackActions } from "@react-navigation/native";
import { styleSplashScreen } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from "../../api/axios-client";
import { setUser, setToken } from "../../redux/actions/typeAction";
import { useDispatch, useSelector } from "react-redux";



const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  AsyncStorage.getItem('USER_DATA_LOGIN').then(async asyncStorageRes => {
    try {
      if (asyncStorageRes != null) {
        const response = await axiosClient.post("/api/auth/login", {
          username: (JSON.parse(asyncStorageRes)).username,
          password: (JSON.parse(asyncStorageRes)).password,
        });
        if (response.status === 200) {
          // nếu return 200 => 
          dispatch(setUser({
            username: (JSON.parse(asyncStorageRes)).username,
            password: (JSON.parse(asyncStorageRes)).password
          }))
          dispatch(setToken(response.token))
          navigation.navigate("HomeScreen")
          console.log('---');
          console.log("Thành công");
        }

        if (response.status === 400) { navigation.navigate("LoginHomeScreen") };
        console.log(response);
        console.log("--------------------------------");
      } else {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace("WelcomeV1"));
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  })
  return (
    <View style={styleSplashScreen.container}>
      <Image style={styleSplashScreen.imageLogo} source={IconAssets.logoApp} />
    </View>
  );
};

export default SplashScreen;
