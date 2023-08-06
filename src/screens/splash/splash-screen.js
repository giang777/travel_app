import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { IconAssets } from "../../utils/app-assets";
import { StackActions } from "@react-navigation/native";
import { styleSplashScreen } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { setToken } from '../../redux/actions/typeAction'


const SplashScreen = ({ navigation }) => {
  const changeScreen = (nameScreen) => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(nameScreen));
    }, 3000);
  }
  AsyncStorage.getItem('NEW_USER').then(asyncStorageRes => {
    asyncStorageRes == null ? changeScreen("WelcomeV1") : (AsyncStorage.getItem('USER_DATA_LOGIN').then(
      asyncStorageResUser => {
        asyncStorageResUser == null ? changeScreen("LoginHomeScreen") : changeScreen("MainScreen")
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
