import { ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../../../components/custom-appbar';
import { CustomTextInput } from '../../../components/custom-textInput';
import Sizebox from "../../../components/custom-sizebox";
import { CustomButton, CustomHideButton } from '../../../components/custom-button';
import { ColorAssets } from '../../../utils/app-assets';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignUpScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.container, { paddingTop }]}>
        <AppBar onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent} >
            <View style={styles.content}>
              <Text style={styles.title}>Create your Account</Text>

              <CustomTextInput iconName={"user"} onChangeText={(text) => { setUsername(text) }} placeholder={"Username"} />
              <Sizebox height={20} />
              <CustomTextInput iconName={"lock"} onChangeText={(text) => { setPassword(text) }} placeholder={"Password"} />
              <Sizebox height={30} />

              {(username && password) ? <CustomButton
                style={styles.button}
                title="Sign up"
                onPress={() => navigation.navigate("ConfirmInformationScreen")}
              /> : <CustomHideButton title={"Sign up"} />}
            </View>
            <View style={styles.footer}>
              <Text style={styles.titleAlreadyHaveAccount}>Already have an account?</Text>
              <Sizebox width={5} />
              <TouchableOpacity onPress={() => navigation.navigate("LoginEmailScreen")}>
                <Text style={styles.titleSignIn}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
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
  titleAlreadyHaveAccount: {
    color: ColorAssets.greyColor,
  },
  titleSignIn: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
})