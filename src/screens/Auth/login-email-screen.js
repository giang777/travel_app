import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,StatusBar
} from "react-native";
import React from "react";
import AppBar from "../../components/custom-appbar";
import Sizebox from "../../components/custom-sizebox";
import { ColorAssets } from "../../utils/app-assets";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-textInput";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoginEmailScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  return (
    <View style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent} >
        <View style={styles.content}>
          <Text style={styles.title}>Login to your Account</Text>

          <CustomTextInput />
          <Sizebox height={20} />
          <CustomTextInput />
          <Sizebox height={30} />

          <CustomButton
            style={styles.button}
            title="Sign in"
            onPress={() => navigation.navigate("HomeScreen")}
          />
          <Sizebox height={15} />
          <TouchableOpacity
            style={styles.titleFogotPassword}
            onPress={() => {}}
          >
            <Text style={styles.titleSignUp}>Forgot the password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.titleDontHaveAccount}>Dont have an account?</Text>
          <Sizebox width={5} />
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.titleSignUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginEmailScreen;

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
    alignItems: "flex-start",
    paddingHorizontal: 15,
    flexGrow: 1,
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
  titleDontHaveAccount: {
    color: ColorAssets.greyColor,
  },
  titleSignUp: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
  titleFogotPassword: {
    width: "100%",
    alignItems: "center",
  },
});
