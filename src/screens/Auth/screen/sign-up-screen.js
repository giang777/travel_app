import { ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../../../components/custom-appbar';
import { CustomTextInput } from '../../../components/custom-textInput';
import Sizebox from "../../../components/custom-sizebox";
import { CustomButton, CustomHideButton } from '../../../components/custom-button';
import axiosClient from "../../../api/axios-client";
import { ColorAssets } from '../../../utils/app-assets';
import { useDispatch } from 'react-redux';
import { registerUser, setUser, setToken } from "../../../redux/actions/typeAction";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignUpScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [notifyError, setNotifyError] = useState('')

  const dispatch = useDispatch()
  const registerConfirmAccount = async () => {
    try {
      const response = await axiosClient.post("/api/auth/register", {
        userName: username,
        fullName: fullName,
        passWord: password,
        re_password: rePassword,
      });
      if (response.status == undefined) {
        dispatch(registerUser({
          userName: username,
          fullName: fullName,
          passWord: password,
          re_password: rePassword
        }))
        //login sau khi dki
        loginUser();
      } else {
        setNotifyError(response.message)
        console.log("đéo dang ky duoc");
      }
      console.log(response);
      console.log("--------------------------------");
    } catch (error) {
      console.log(error);
    }
  }
  const loginUser = async () => {
    const responselogin = await axiosClient.post("/api/auth/login", {
      username,
      password,
    });
    if (responselogin.status === 200) {
      dispatch(setUser({
        username: username,
        password: password
      }))
      dispatch(setToken(responselogin.token))
      navigation.navigate("HomeScreen")
    } else {
      navigation.navigate("LoginEmailScreen")
    }
  }
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
              <CustomTextInput valueText={username ? true : false} iconName={"user"} onChangeText={(text) => { setUsername(text) }} placeholder={"Username (at least 5 characters)"} />
              <Sizebox height={20} />
              <CustomTextInput valueText={fullName ? true : false} iconName={"pencil"} onChangeText={(text) => { setFullName(text) }} placeholder={"Full name *(Nguyen Thi Hoa Hong)"} />
              <Sizebox height={20} />
              <CustomTextInput valueText={password ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setPassword(text) }} placeholder={"Password (at least 6 characters)"} />
              <Sizebox height={20} />
              <CustomTextInput valueText={rePassword ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setRePassword(text) }} placeholder={"Confirm password"} />
              <Sizebox height={10} />
              <View style={{ width: '100%', alignItems: 'center', height: 20 }}>
                {notifyError != '' ? <Text style={{ fontSize: 16, color: 'red' }}>*{notifyError}</Text> : <View></View>}

              </View>
              <Sizebox height={30} />

              {(username.length > 4 && password.length > 5 && fullName.length > 0 && rePassword == password) ? <CustomButton
                style={styles.button}
                title="Sign up"
                onPress={registerConfirmAccount}
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
    marginVertical: windowHeight / 13,
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