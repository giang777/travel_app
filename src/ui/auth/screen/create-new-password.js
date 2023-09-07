import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ColorAssets,
  IconAssets,
  containScreenAssets,
} from "../../../utils/app-assets";
import AppBar from "../../../common/custom/custom-appbar";
import {
  CustomButton,
  CustomHideButton,
} from "../../../common/custom/custom-button";
import { CustomTextInput } from "../../../common/custom/custom-textInput";
import { changeScreenWithOutTime } from "../../../utils/navigation-utils";
import ModalView from "../components/modal-view";
import { styleCreateNewPWD } from "../styles";
import i18n from "../../../l10n/i18n";
const CreateNewPassword = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <SafeAreaView
      style={[
        containScreenAssets.safeAreaView,
        showModal
          ? { backgroundColor: ColorAssets.greyColor300 }
          : { backgroundColor: ColorAssets.whiteColor },
      ]}
    >
      <View style={containScreenAssets.container}>
        <AppBar onPress={() => navigation.goBack()} title={"Forgot Password"} />
        <ScrollView
          style={containScreenAssets.scrollView}
          contentContainerStyle={containScreenAssets.scrollViewContent}
        >
          <View
            style={styleCreateNewPWD.body}
          >
            <Image
              source={IconAssets.shield}
              style={{ width: 250, height: 300 }}
            />
            <Text style={styleCreateNewPWD.title}>
              {i18n.t("auth.newPassword.createNewPassword")}
            </Text>
            <Sizebox height={10} />
            <CustomTextInput
              condition={password.length > 5 ? true : false}
              fillText={password ? true : false}
              secureTextEntry={true}
              showHide={true}
              iconName={"lock"}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder= {i18n.t("auth.register.password")}
            />
            <CustomTextInput
              condition={rePassword == password ? true : false}
              fillText={rePassword ? true : false}
              secureTextEntry={true}
              showHide={true}
              iconName={"lock"}
              onChangeText={(text) => {
                setRePassword(text);
              }}
              placeholder={i18n.t("auth.newPassword.confirmPassword")}
            />
          </View>
          <View style={styleCreateNewPWD.footer}>
            {password.length > 5 && rePassword == password ? (
              <CustomButton
                title={i18n.t("auth.fogotPassword.continue")}
                onPress={() => {
                  setShowModal(true);
                }}
              />
            ) : (
              <CustomHideButton title={i18n.t("auth.fogotPassword.continue")} />
            )}
          </View>
          <ModalView
            show={showModal}
            isForgotPassword={true}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewPassword;

