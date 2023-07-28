import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import * as Device from 'expo-device'
import React, { useEffect, useState } from "react";
import AppBar from "../../components/custom-appbar";
import Sizebox from "../../components/custom-sizebox";
import { ColorAssets } from "../../utils/app-assets";
import { CustomButton, CustomHideButton } from "../../components/custom-button";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from "../../redux/actions/typeAction";
import axiosClient from "../../api/axios-client";
import { CustomTextInput } from "../../components/custom-textInput";
import { StackActions } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoginEmailScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [textError, setTextError] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [statusLoading, setStatusLoading] = useState(false)
  const dispatch = useDispatch();
  const handleFormSubmit = async () => {
    try {
      setStatusLoading(true)
      const response = await axiosClient.post("/api/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        // nếu return 200 => 
        dispatch(setToken(response.token))
        if (toggleCheckBox) {
          let user = { username, password }
          AsyncStorage.setItem('USER_DATA_LOGIN', JSON.stringify(user))
        } else {
          AsyncStorage.removeItem('USER_DATA_LOGIN')
        }
        navigation.dispatch(StackActions.replace("HomeScreen"))
        console.log('---');
        console.log("Thành công");
      }

      if (response.status === 400) {
        setTextError(response.message)
        console.log("đéo tìm thấy");
      }
      setStatusLoading(false)
      console.log(response);
      console.log("--------------------------------");
    } catch (error) {
      console.log(error);
    }
  };
  // lấy dữ liệu user
  // const check = useSelector((state) => state.authReducer.userinfo);

  return (
    <SafeAreaView style={[styles.safeAreaView, statusLoading ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'white' }]}>
      <View style={styles.container}>
        <AppBar onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Device.osName === 'iOS' ? "padding" : "height"}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Login to your Account</Text>
              <Text style={styles.textError}>{textError}</Text>
              <CustomTextInput
                iconName={"user"}
                valueText={username ? true : false}
                placeholder={"Username"}
                showHide={false}
                onChangeText={(e) => { setUsername(e) }}
              />
              <Sizebox height={20} />
              <CustomTextInput
                iconName={"lock"}
                valueText={password ? true : false}
                placeholder={"Password"}
                secureTextEntry={true}
                showHide={true}
                onChangeText={(e) => { setPassword(e) }}
              />
              <Sizebox height={20} />
              <View style={styles.section}>
                <CheckBox
                  style={styles.checkbox}
                  value={toggleCheckBox}
                  onValueChange={setToggleCheckBox}
                  color={toggleCheckBox ? '#1AB65C' : undefined}
                />
                <Text style={styles.paragraph}>Remmember me</Text>
              </View>
              <Sizebox height={30} />

              {username && password ? <CustomButton
                style={styles.button}
                title="Sign in"
                onPress={handleFormSubmit}
              /> : <CustomHideButton title={"Sign in"} />}

              <Sizebox height={15} />
              <TouchableOpacity
                style={styles.titleFogotPassword}
                onPress={() => { navigation.navigate("ForgotPassword") }}
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
                onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={styles.titleSignUp}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {statusLoading ? <View style={styles.boxLoading}>
          <ActivityIndicator size={"large"} color="#2196F3" />
        </View> : <></>}
      </View>
    </SafeAreaView>
  );
};

export default LoginEmailScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }, paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderRadius: 6,
    borderColor: '#1AB65C',
    borderWidth: 3
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
  }
});
