import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { IconAssets } from "../../utils/app-assets";
import { StackActions } from "@react-navigation/native";
import { styleSplashScreen } from "./styles";



const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.dispatch(StackActions.replace("WelcomeV1"));
  }, 3000);

  return (
    <View style={styleSplashScreen.container}>
      <Image style={styleSplashScreen.imageLogo} source={IconAssets.logoApp} />
    </View>
  );
};

export default SplashScreen;
