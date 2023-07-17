import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppBar from "../../components/custom-appbar";
import Sizebox from "../../components/custom-sizebox";
import { ColorAssets } from "../../utils/app-assets";
import { CustomButton, CustomHideButton } from "../../components/custom-button";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { setUser } from "../../redux/actions/typeAction";
import axiosClient from "../../api/axios-client";
import { CustomTextInput } from "../../components/custom-textInput";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoginEmailScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkbutton, setCheckbutton] = useState(false)
  const dispatch = useDispatch();
  const handleFormSubmit = async () => {
    console.log("username: " + username);
    console.log("password: " + password);
    try {
      // const response = await axiosClient.post("/api/auth/login", {
      //   username,
      //   password,
      // });
      // if (response.status === 200) console.log("Thành công");
      // nếu return 200 => 
      dispatch(setUser({
        username: username,
        password: password
      }))
      // console.log('---');
      // if (response.status === 400) console.log("đéo tìm thấy");
      console.log("--------------------------------");
    } catch (error) {
      console.log(error);
    }
  };
  // lấy dữ liệu user
  // const check = useSelector((state) => state.authReducer.userinfo);

  useEffect(() => {
    setCheckbutton((username && password) ? false : true)
  }, [username, password])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <AppBar onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Login to your Account</Text>

              <CustomTextInput
                iconName={"user"}
                placeholder={"Username"}
                onChangeText={(e) => { setUsername(e) }}
              />
              <Sizebox height={20} />
              <CustomTextInput
                iconName={"lock"}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={(e) => { setPassword(e) }}
              />
              <Sizebox height={30} />

              {username && password ? <CustomButton
                style={styles.button}
                title="Sign in"
                onPress={handleFormSubmit}
              /> : <CustomHideButton title={"Sign in"} />}

              <Sizebox height={15} />
              <TouchableOpacity
                style={styles.titleFogotPassword}
                onPress={() => { }}
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
      </View>
    </SafeAreaView>
  );
};

export default LoginEmailScreen;

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
});
