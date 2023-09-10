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
import i18n from "../../../l10n/i18n";
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <SafeAreaView style={containScreenAssets.safeAreaView}>
      <View style={containScreenAssets.container}>
        <AppBar onPress={() => navigation.goBack()} title=                {i18n.t("auth.fogotPassword.title")} />
        <ScrollView
          style={containScreenAssets.scrollView}
          contentContainerStyle={containScreenAssets.scrollViewContent}
        >
          <View style={styleFogotPassword.container}>
            <View style={styleFogotPassword.form}>
              <Image source={IconAssets.fogotPassword} style={styleFogotPassword.icon} />

              <Text style={styleFogotPassword.textForgotPass}>
              {i18n.t("auth.fogotPassword.pleaseEnterEmail")}
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
                  title= {i18n.t("auth.fogotPassword.continue")}
             
                  onPress={() => {
                    navigation.navigate("ForgotPasswordInputCode");
                  }}
                />
              ) : (
                <CustomHideButton title= {i18n.t("auth.fogotPassword.continue")}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
