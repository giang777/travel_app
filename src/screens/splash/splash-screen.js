import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { IconAssets } from "../../utils/app-assets";
import { StackActions } from "@react-navigation/native";
import { styleSplashScreen } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from "../../api/axios-client";
import { useDispatch } from "react-redux";
import { setToken } from '../../redux/actions/typeAction'


const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const changeScreen = (nameScreen) => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(nameScreen));
    }, 3000);
  }
  const refreshToken = async (token) => {
    const response = await axiosClient.post("/api/auth/refreshtoken", {
      refreshToken: token
    });
    response.accessToken != null ? dispatch(setToken(response.accessToken)) : undefined
    console.log('token: ' + response.accessToken);
  }
  AsyncStorage.getItem('NEW_USER').then(asyncStorageRes => {
    asyncStorageRes == null ? changeScreen("WelcomeV1") : (AsyncStorage.getItem('USER_DATA_LOGIN').then(
      asyncStorageResUser => {
        asyncStorageResUser == null ? changeScreen("LoginHomeScreen") : (
          AsyncStorage.getItem('REFRESH_TOKEN').then(asyncStorage => {
            if (asyncStorage != null) {
              refreshToken(asyncStorage)
              setInterval(() => {
                refreshToken(asyncStorage)
              }, 870000)
            }
            changeScreen("MainScreen")
          })
        )
      }
    ))
  })
  return (
    <View style={styleSplashScreen.container}>
      <Image style={styleSplashScreen.imageLogo} source={IconAssets.logoApp} />
    </View>
  );
};

export default SplashScreen;
