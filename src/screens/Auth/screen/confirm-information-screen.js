import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import AppBar from "../../../components/custom-appbar";
import CustomTextInput from "../../../components/custom-textInput";
import Sizebox from "../../../components/custom-sizebox";
import CustomButton from "../../../components/custom-button";
import { ColorAssets } from "../../../utils/app-assets";
import CustomAvatar from "../../../components/custom-avatar";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ConfirmInformationScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  return (
    <View style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => navigation.goBack()} title={"Fill Your Profile"} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          <CustomAvatar />
          <CustomTextInput />
          <CustomTextInput />
          <CustomTextInput />
          <CustomTextInput />
          <CustomTextInput />
        </View>
        <View style={styles.footer}>
          <CustomButton title={"Continue"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmInformationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorAssets.whiteColor,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: "space-around",
  },
  title: {
    marginVertical: windowHeight / 11.5,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: windowWidth / 9.5,
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleAlreadyHaveAccount: {
    color: ColorAssets.greyColor,
  },
  titleSignIn: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
});
