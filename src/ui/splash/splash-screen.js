import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { IconAssets } from "../../utils/app-assets";
import { styleSplashScreen } from "./styles";

import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreen } from "../../utils/navigation-utils";

const SplashScreen = ({ navigation }) => {
  
  SharedPreferences.GET_NEW_USER().then((asyncStorageRes) => {
    asyncStorageRes == null
      ? changeScreen(navigation,"WelcomeV1")
      : SharedPreferences.GET_USER_DATA().then((asyncStorageResUser) => {
          asyncStorageResUser == null
            ? changeScreen(navigation,"LoginHomeScreen")
            : changeScreen(navigation,"MainScreen");
        });
  });
  return (
    <View style={styleSplashScreen.container}>
      <Image style={styleSplashScreen.imageLogo} source={IconAssets.logoApp} />
    </View>
  );
};

export default SplashScreen;