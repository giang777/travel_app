import {
  ScrollView,
  StatusBar,
  styleSignUpheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useState } from "react";
import * as Device from "expo-device";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../../common/custom/custom-appbar";
import { CustomTextInput } from "../../../common/custom/custom-textInput";
import Sizebox from "../../../common/custom/custom-sizebox";
import {
  CustomButton,
  CustomHideButton,
} from "../../../common/custom/custom-button";
import axiosClient from "../../../api/axios-client";
import { ColorAssets, containScreenAssets } from "../../../utils/app-assets";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/actions/typeAction";
import LoadingCustom from "../../../common/custom/custom-loading";
import ModalView from "../components/modal-view";
import { styleSignUp } from "../styles";
import i18n from "../../../l10n/i18n";
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const fullNameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/;
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [notifyError, setNotifyError] = useState("");
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusFillText, setStatusFillText] = useState(false);

  const dispatch = useDispatch();
  const registerConfirmAccount = async () => {
    try {
      setStatusLoading(true);
      const response = await axiosClient.post("/api/auth/register", {
        userName: username,
        fullName: fullName,
        email: email,
        passWord: password,
        re_password: rePassword,
      });
      if (response.status == 200) {
        //chuyen sang login sau khi dki
        dispatch(registerUser({ userName: username, passWord: password }));
        navigation.navigate("LoginEmailScreen");
      } else {
        setNotifyError(response.message);
      }
      setStatusLoading(false);
    } catch (error) {
      setNotifyError(error.response.data.message);
      setStatusLoading(false);
      console.log(error);
    }
  };
  const showDialogBackScreen = () => {
    if (
      username != "" ||
      password != "" ||
      email != "" ||
      fullName != "" ||
      rePassword != ""
    ) {
      return setStatusFillText(true);
    }
    return navigation.goBack();
  };
  const hideDialogBackScreen = () => {
    setStatusFillText(false);
  };
  console.log(statusFillText);
  return (
    <View style={containScreenAssets.container}>
      {statusLoading ? (
        <LoadingCustom
          avatar={
            "https://media.discordapp.net/attachments/1135973606862635140/1143382249362948116/logo.png?width=518&height=519"
          }
        />
      ) : (
        <SafeAreaView
          style={[
            containScreenAssets.safeAreaView,
            {
              backgroundColor: statusFillText
                ? ColorAssets.greyColor300
                : ColorAssets.whiteColor,
            },
          ]}
        >
          <View style={[containScreenAssets.container]}>
            <AppBar onPress={showDialogBackScreen} />
            <ScrollView
              style={containScreenAssets.scrollView}
              contentContainerStyle={containScreenAssets.scrollViewContent}
            >
              <View style={styleSignUp.content}>
                <Text style={styleSignUp.title}>
                  {i18n.t("auth.register.createYourAccount")}
                </Text>
                <CustomTextInput
                  condition={username.length > 4 ? true : false}
                  fillText={username ? true : false}
                  iconName={"user"}
                  errorText={"Vui lòng không để trống"}
                  onChangeText={(text) => {
                    setUsername(text);
                  }}
                  placeholder={i18n.t(
                    "auth.register.usernameAtLeastFiveCharacters"
                  )}
                />
                <Sizebox height={20} />
                <CustomTextInput
                  condition={fullNameRegex.test(fullName) ? true : false}
                  fillText={fullName ? true : false}
                  iconName={"pencil"}
                  errorText={"Vui lòng không để trống"}
                  onChangeText={(text) => {
                    setFullName(text);
                  }}
                  placeholder={i18n.t("auth.register.fullName")}
                />
                <Sizebox height={20} />
                <CustomTextInput
                  condition={emailRegex.test(email) ? true : false}
                  fillText={email ? true : false}
                  iconName={"envelope"}
                  errorText={"Vui lòng không để trống"}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                  placeholder={"Email"}
                />
                <Sizebox height={20} />
                <CustomTextInput
                  condition={password.length > 5 ? true : false}
                  fillText={password ? true : false}
                  secureTextEntry={true}
                  showHide={true}
                  errorText={"Vui lòng không để trống"}
                  iconName={"lock"}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                  placeholder={i18n.t("auth.register.password")}
                />
                <Sizebox height={20} />
                <CustomTextInput
                  condition={rePassword == password ? true : false}
                  fillText={rePassword ? true : false}
                  secureTextEntry={true}
                  errorText={"Vui lòng không để trống"}
                  showHide={true}
                  iconName={"lock"}
                  onChangeText={(text) => {
                    setRePassword(text);
                  }}
                  placeholder={i18n.t("auth.register.rePassword")}
                />
                <Sizebox height={10} />
                <View
                  style={{ width: "100%", alignItems: "center", height: 20 }}
                >
                  {notifyError != "" ? (
                    <Text style={{ fontSize: 16, color: "red" }}>
                      *{notifyError}
                    </Text>
                  ) : (
                    <View></View>
                  )}
                </View>
                <Sizebox height={30} />

                {username.length > 4 &&
                password.length > 5 &&
                fullNameRegex.test(fullName) &&
                rePassword == password &&
                emailRegex.test(email) ? (
                  <CustomButton
                    title={i18n.t("auth.signUp")}
                    onPress={registerConfirmAccount}
                  />
                ) : (
                  <CustomHideButton title={i18n.t("auth.signUp")} />
                )}
              </View>
              <View style={styleSignUp.footer}>
                <Text style={styleSignUp.titleAlreadyHaveAccount}>
                  {i18n.t("auth.alreadyHaveAccount")}
                </Text>
                <Sizebox width={5} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginEmailScreen")}
                >
                  <Text style={styleSignUp.titleSignIn}>
                    {i18n.t("auth.signIn")}
                  </Text>
                </TouchableOpacity>
              </View>
              <ModalView
                show={statusFillText}
                isForgotPassword={false}
                navigation={navigation}
                hideDialogBackScreen={hideDialogBackScreen}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default SignUpScreen;
