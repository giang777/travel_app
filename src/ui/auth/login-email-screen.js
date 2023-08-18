import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import * as Device from "expo-device";
import React, { useEffect, useState } from "react";
import AppBar from "../../common/custom/custom-appbar";
import Sizebox from "../../common/custom/custom-sizebox";
import { ColorAssets, containScreenAssets } from "../../utils/app-assets";
import {
  CustomButton,
  CustomHideButton,
} from "../../common/custom/custom-button";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from "expo-checkbox";
import { setToken } from "../../redux/actions/typeAction";
import { CustomTextInput } from "../../common/custom/custom-textInput";
import { StackActions } from "@react-navigation/native";
import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";

import { handleLogIn } from "../../api/auth/auth-services";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoginEmailScreen = ({ navigation }) => {
  // lấy dữ liệu user
  const getUserRes = useSelector((state) => state.register.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setUsername(getUserRes.userName);
    setPassword(getUserRes.passWord);
  }, [getUserRes.userName, getUserRes.passWord]);
  // hàm refresh accessToken
  const handleFormSubmit = async () => {
    try {
      setStatusLoading(true);
      const response = await handleLogIn(username, password);
      console.log(response);
      if (response.status == 200) {
        // nếu return 200 =>
        dispatch(setToken(response.data.accessToken));
        SharedPreferences.SET_USER_DATA({ username, password });
        SharedPreferences.SET_TOKEN(response.data.refreshToken);
        const fullName = response.data.user.fullname;
        const id = response.data.user._id;
        console.log(id);
        SharedPreferences.SET_USER_INFO({ fullName, id });
        changeScreenWithOutTime(navigation, "MainScreen");
      }

      setStatusLoading(false);
    } catch (error) {
      setStatusLoading(false);
      setTextError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={[
        containScreenAssets.safeAreaView,
        statusLoading
          ? { backgroundColor: "rgba(0, 0, 0, 0.5)" }
          : { backgroundColor: "white" },
      ]}
    >
      <View style={containScreenAssets.container}>
        <AppBar onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Device.osName === "iOS" ? "padding" : "height"}
        >
          <ScrollView
            style={containScreenAssets.scrollView}
            contentContainerStyle={containScreenAssets.scrollViewContent}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Login to your Account</Text>
              <Text style={styles.textError}>{textError}</Text>
              <CustomTextInput
                iconName={"user"}
                fillText={username ? true : false}
                placeholder={"Username"}
                showHide={false}
                valueText={username}
                onChangeText={(e) => {
                  setUsername(e);
                }}
              />
              <Sizebox height={20} />
              <CustomTextInput
                iconName={"lock"}
                fillText={password ? true : false}
                placeholder={"Password"}
                secureTextEntry={true}
                showHide={true}
                valueText={password}
                onChangeText={(e) => {
                  setPassword(e);
                }}
              />
              <Sizebox height={20} />
              <View style={styles.section}>
                <CheckBox
                  style={styles.checkbox}
                  value={toggleCheckBox}
                  onValueChange={setToggleCheckBox}
                  color={toggleCheckBox ? "#1AB65C" : undefined}
                />
                <Text style={styles.paragraph}>Remmember me</Text>
              </View>
              <Sizebox height={30} />

              {username && password ? (
                <CustomButton
                  style={styles.button}
                  title="Sign in"
                  onPress={handleFormSubmit}
                />
              ) : (
                <CustomHideButton title={"Sign in"} />
              )}

              <Sizebox height={15} />
              <TouchableOpacity
                style={styles.titleFogotPassword}
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text style={styles.titleSignUp}>Forgot the password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text style={styles.titleDontHaveAccount}>
                Dont have an account?
              </Text>
              <Sizebox width={5} />
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(StackActions.replace("SignUpScreen"))
                }
              >
                <Text style={styles.titleSignUp}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {statusLoading ? (
          <View style={styles.boxLoading}>
            <ActivityIndicator size={"large"} color="#2196F3" />
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default LoginEmailScreen;

const styles = StyleSheet.create({
  content: {
    alignItems: "flex-start",
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  title: {
    marginVertical: windowHeight / 15,
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
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderRadius: 6,
    borderColor: "#1AB65C",
    borderWidth: 3,
  },
  textError: {
    fontSize: 16,
    color: "red",
    marginHorizontal: 10,
    marginBottom: 8,
  },
  boxLoading: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
