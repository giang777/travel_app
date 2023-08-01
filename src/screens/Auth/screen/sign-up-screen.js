import { ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
import * as Device from 'expo-device'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../../components/custom/custom-appbar';
import { CustomTextInput } from '../../../components/custom/custom-textInput';
import Sizebox from "../../../components/custom/custom-sizebox";
import { CustomButton, CustomHideButton } from '../../../components/custom/custom-button';
import axiosClient from "../../../api/axios-client";
import { ColorAssets, containScreenAssets } from '../../../utils/app-assets';
import { useDispatch } from 'react-redux';
import { StackActions } from "@react-navigation/native";
import { registerUser } from "../../../redux/actions/typeAction";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const fullNameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/
  const [email, setEmail] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [notifyError, setNotifyError] = useState('')
  const [statusLoading, setStatusLoading] = useState(false)
  const [statusFillText, setStatusFillText] = useState(false)


  const dispatch = useDispatch()
  const registerConfirmAccount = async () => {
    try {
      setStatusLoading(true)
      const response = await axiosClient.post("/api/auth/register", {
        userName: username,
        fullName: fullName,
        email: email,
        passWord: password,
        re_password: rePassword,
      });
      if (response.status == undefined) {
        //chuyen sang login sau khi dki
        dispatch(registerUser({ userName: username, passWord: password }))
        navigation.navigate("LoginEmailScreen")
      } else {
        setNotifyError(response.message)
      }
      setStatusLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  const showDialogBackScreen = () => {
    if (username != '' || password != '' || email != '' || fullName != '' || rePassword != '') {
      return setStatusFillText(true)
    }
    return navigation.goBack()
  }
  const hideDialogBackScreen = () => {
    setStatusFillText(false)
  }
  return (
    <SafeAreaView style={[containScreenAssets.safeAreaView, statusFillText ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'white' }]}>
      <View style={[containScreenAssets.container]}>
        <AppBar onPress={showDialogBackScreen} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Device.osName === 'iOS' ? "padding" : "height"}>
          <ScrollView
            style={containScreenAssets.scrollView}
            contentContainerStyle={containScreenAssets.scrollViewContent} >
            <View style={styles.content}>
              <Text style={styles.title}>Create your Account</Text>
              <CustomTextInput condition={username.length > 4 ? true : false} fillText={username ? true : false} iconName={"user"} onChangeText={(text) => { setUsername(text) }} placeholder={"Username (at least 5 characters)"} />
              <Sizebox height={20} />
              <CustomTextInput condition={(fullNameRegex.test(fullName)) ? true : false} fillText={fullName ? true : false} iconName={"pencil"} onChangeText={(text) => { setFullName(text) }} placeholder={"Full name *(Nguyen Thi Hoa Hong)"} />
              <Sizebox height={20} />
              <CustomTextInput condition={(emailRegex.test(email)) ? true : false} fillText={email ? true : false} iconName={"envelope"} onChangeText={(text) => { setEmail(text) }} placeholder={"Email"} />
              <Sizebox height={20} />
              <CustomTextInput condition={password.length > 5 ? true : false} fillText={password ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setPassword(text) }} placeholder={"Password (at least 6 characters)"} />
              <Sizebox height={20} />
              <CustomTextInput condition={rePassword == password ? true : false} fillText={rePassword ? true : false} secureTextEntry={true} showHide={true} iconName={"lock"} onChangeText={(text) => { setRePassword(text) }} placeholder={"Confirm password"} />
              <Sizebox height={10} />
              <View style={{ width: '100%', alignItems: 'center', height: 20 }}>
                {notifyError != '' ? <Text style={{ fontSize: 16, color: 'red' }}>*{notifyError}</Text> : <View></View>}

              </View>
              <Sizebox height={30} />

              {(username.length > 4 && password.length > 5 && fullNameRegex.test(fullName) && rePassword == password && emailRegex.test(email)) ? <CustomButton
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
            <ModalView show={statusFillText} navigation={navigation} hideDialogBackScreen={hideDialogBackScreen} />
          </ScrollView>
        </KeyboardAvoidingView>
        {statusLoading ? <View style={styles.boxLoading}>
          <ActivityIndicator size={"large"} color="#2196F3" />
        </View> : <></>}
      </View>
    </SafeAreaView>
  );
}

const ModalView = ({ show, navigation, hideDialogBackScreen }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
      >
        <View style={[styles.centeredView, show ? { flex: 1 } : undefined]}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: ColorAssets.greenColor }}>Do you want to back?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <TouchableOpacity style={[styles.btncancel, styles.shadowButton]} onPress={() => { hideDialogBackScreen() }}>
                <Text style={styles.textcancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btngohome, styles.shadowButton]} onPress={() => { hideDialogBackScreen(); navigation.dispatch(StackActions.replace("LoginEmailScreen")) }}>
                <Text style={styles.textgohome}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal >
    </View >
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  content: {
    alignItems: "flex-start",
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  title: {
    marginVertical: windowHeight / 40,
    fontWeight: "500",
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
  textError: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 10,
    marginBottom: 8
  },
  boxLoading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  //modal
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btncancel: {
    backgroundColor: ColorAssets.whiteColor,
    width: '48%',
    borderRadius: 100,
    marginTop: 20
  },
  btngohome: {
    backgroundColor: ColorAssets.greenColor,
    width: '48%',
    borderRadius: 100,
    marginTop: 20
  },
  textgohome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 15
  },
  textcancel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorAssets.greenColor,
    textAlign: 'center',
    padding: 15
  },
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})