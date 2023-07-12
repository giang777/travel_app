import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  BackHandler,
  ScrollView,
} from "react-native";
import React from "react";
import AppBar from "../../components/custom-appbar";
import { ColorAssets } from "../../utils/app-assets";
import Sizebox from "../../utils/sizebox";
import CustomButton from "../../components/custom-button";
import { useSelector } from "react-redux";

const LoginHomeScreen = () => {
  const { width, height } = useSelector((state) => state);
  const paddingTop = StatusBar.currentHeight || 0;
  return (
    <View style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => BackHandler.exitApp()} />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.content, { paddingTop: height / 7 }]}>
          <Text style={[styles.title, { fontSize: width / 10 }]}>
            Let's your in
          </Text>
          <Sizebox height={50} />
          <CustomButton
            style={styles.button}
            title="Sign in with Email"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorAssets.whiteColor,
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  scrollView:{
    paddingHorizontal:15,
  },
  title: {
    fontWeight: 600,
    letterSpacing: 1,
  },
});
