import { ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../../../components/custom-appbar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CustomTextInput } from '../../../components/custom-textInput';
import { CustomTextInput2 } from '../../../components/custom-textInput'
import Sizebox from "../../../components/custom-sizebox";
import CustomButton from '../../../components/custom-button';
import { ColorAssets } from '../../../utils/app-assets';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignUpScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  const [date, setDate] = useState(new Date())

  return (
    <View style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent} >
        <View style={styles.content}>
          <Text style={styles.title}>Create your Account</Text>

          <CustomTextInput textPlaceHolder={"Username"} />
          <Sizebox height={20} />
          <CustomTextInput textPlaceHolder={"Password"} />
          <Sizebox height={30} />

          <CustomButton
            style={styles.button}
            title="Sign up"
            onPress={() => navigation.navigate("ConfirmInformationScreen")}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.titleAlreadyHaveAccount}>Already have an account?</Text>
          <Sizebox width={5} />
          <TouchableOpacity onPress={() => navigation.navigate("LoginEmailScreen")}>
            <Text style={styles.titleSignIn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({
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