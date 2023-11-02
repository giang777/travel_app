import {
  Dimensions,
  ScrollView,
  styleLoginEmailheet,
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
import { saveAccount, setToken } from "../../redux/actions/typeAction";
import { CustomTextInput } from "../../common/custom/custom-textInput";
import { StackActions } from "@react-navigation/native";
import SharedPreferences from "../../database/share_preferences_helper";
import { changeScreenWithOutTime } from "../../utils/navigation-utils";

import { handleLogIn } from "../../api/auth/auth-services";
import { styleLoginEmail } from "./styles";
import i18n from "../../l10n/i18n";

const LoginEmailScreen = ({ navigation }) => {
  // lấy dữ liệu user
  const getUserRes = useSelector((state) => state.register.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [statusLoading, setStatusLoading] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setUsername(getUserRes.userName);
  //   setPassword(getUserRes.passWord);
  // }, [getUserRes.userName, getUserRes.passWord]);
  // hàm refresh accessToken
  const handleFormSubmit = async () => {
    changeScreenWithOutTime(navigation, "MainScreen");
    // try {
    //   setStatusLoading(true);
    //   const response = await handleLogIn(username, password);
    //   console.log(response);
    //   if (response.status == 200) {
    //     // nếu return 200 =>
    //     dispatch(setToken(response.data.accessToken));
    //     dispatch(saveAccount( {username, password }));

    //     // SharedPreferences.SET_USER_DATA({ username, password });
    //     SharedPreferences.SET_TOKEN(response.data.refreshToken);
    //     const fullName = response.data.user.fullname;
    //     const id = response.data.user._id;
    //     SharedPreferences.SET_USER_INFO({ fullName, id });
    //   }

    //   setStatusLoading(false);
    // } catch (error) {
    //   setStatusLoading(false);
    //   setTextError(error.response.data.message);
    //   console.log(error);
    // }
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
            <View style={styleLoginEmail.content}>
              <Text style={styleLoginEmail.title}>
                {i18n.t("auth.email.loginToYourAccount")}
              </Text>
              <Text style={styleLoginEmail.textError}>{textError}</Text>
              <CustomTextInput
                iconName={"user"}
                fillText={username ? true : false}
                placeholder={"Username"}
                errorText={"Vui lòng không để trống"}

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
                errorText={"Vui lòng không để trống"}
                secureTextEntry={true}
                showHide={true}
                valueText={password}
                onChangeText={(e) => {
                  setPassword(e);
                }}
              />
             
              <Sizebox height={30} />

              {username && password ? (
                <CustomButton
                  style={styleLoginEmail.button}
                  title={i18n.t("auth.signIn")}
                  onPress={handleFormSubmit}
                />
              ) : (
                <CustomHideButton title={i18n.t("auth.signIn")} />
              )}

              <Sizebox height={15} />
              <TouchableOpacity
                style={styleLoginEmail.titleFogotPassword}
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text style={styleLoginEmail.titleSignUp}>
                  {i18n.t("auth.email.fogotThePassword")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styleLoginEmail.footer}>
              <Text style={styleLoginEmail.titleDontHaveAccount}>
                {i18n.t("auth.dontHaveAccount")}
              </Text>
              <Sizebox width={5} />
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(StackActions.replace("SignUpScreen"))
                }
              >
                <Text style={styleLoginEmail.titleSignUp}>
                  {i18n.t("auth.signUp")}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {statusLoading ? (
          <View style={styleLoginEmail.boxLoading}>
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
