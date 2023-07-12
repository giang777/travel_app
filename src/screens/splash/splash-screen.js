import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { IconAssets } from "../../utils/app-assets";
import { useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";
const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.dispatch(StackActions.replace("WelcomeV1"));
  }, 3000);

  const { width, height } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Image
        style={[styles.imageLogo, { width: width / 2, height: height / 4 }]}
        source={IconAssets.logoApp}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
