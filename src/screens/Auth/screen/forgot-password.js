import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorAssets } from "../../../utils/app-assets";
import { CustomTextInput } from '../../../components/custom-textInput';
import AppBar from "../../../components/custom-appbar";
import { CustomButton, CustomHideButton } from '../../../components/custom-button';
import * as Device from 'expo-device'
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <AppBar onPress={() => navigation.goBack()} title={'Forgot Password'} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Device.osName === 'iOS' ? "padding" : "height"}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}>
            <View style={{ flexGrow: 1 }}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <Image source={require('../../../assets/icons/forgot-password.png')} />
              </View>
              <Text style={styles.textForgotPass}>Please enter your email address</Text>
              <View style={{ paddingHorizontal: 15 }}>
                <CustomTextInput condition={(emailRegex.test(email)) ? true : false} fillText={email ? true : false} iconName={"envelope"} onChangeText={(text) => { setEmail(text) }} placeholder={"Email"} />
              </View>
              <View style={styles.footer}>
                {(emailRegex.test(email)) ? <CustomButton
                  title="Continue"
                  onPress={() => { navigation.navigate("ForgotPasswordInputCode") }}
                /> : <CustomHideButton title={"Continue"} />}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorAssets.whiteColor,
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
  boxTitle: {
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  textForgotPass: {
    fontSize: 17,
    paddingHorizontal: 15,
    marginVertical: 25,
    color: ColorAssets.greyColor
  },
  titleSignIn: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    flex: 1,
  },
})