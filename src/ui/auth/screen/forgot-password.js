import {
  styleFogotPasswordheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ColorAssets,
  IconAssets,
  containScreenAssets,
} from "../../../utils/app-assets";
import { CustomTextInput } from "../../../common/custom/custom-textInput";
import AppBar from "../../../common/custom/custom-appbar";
import {
  CustomButton,
  CustomHideButton,
} from "../../../common/custom/custom-button";
import {styleFogotPassword} from "../styles"
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <SafeAreaView style={containScreenAssets.safeAreaView}>
      <View style={containScreenAssets.container}>
        <AppBar onPress={() => navigation.goBack()} title={"Forgot Password"} />
        <ScrollView
          style={containScreenAssets.scrollView}
          contentContainerStyle={containScreenAssets.scrollViewContent}
        >
          <View style={styleFogotPassword.container}>
            <View style={styleFogotPassword.form}>
              <Image source={IconAssets.fogotPassword} style={styleFogotPassword.icon} />

              <Text style={styleFogotPassword.textForgotPass}>
                Please enter your email address
              </Text>
              <CustomTextInput
                condition={emailRegex.test(email) ? true : false}
                fillText={email ? true : false}
                iconName={"envelope"}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                placeholder={"Email"}
              />
            </View>
            <View >
              {emailRegex.test(email) ? (
                <CustomButton
                  title="Continue"
                  onPress={() => {
                    navigation.navigate("ForgotPasswordInputCode");
                  }}
                />
              ) : (
                <CustomHideButton title={"Continue"} />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
