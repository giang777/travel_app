import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Pressable,
  TextInput,
  Platform,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import AppBar from "../../../components/custom-appbar";
import { CustomTextInput } from "../../../components/custom-textInput";
import { CustomTextInput2 } from '../../../components/custom-textInput'
import Sizebox from "../../../components/custom-sizebox";
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import CustomSwitch from '../../../components/custom-switch'
import CustomButton from "../../../components/custom-button";
import { ColorAssets } from "../../../utils/app-assets";
import CustomAvatar from "../../../components/custom-avatar";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ConfirmInformationScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  const [open, setOpen] = useState(false)
  const showDatePicker = () => {
    setOpen(true)
  }
  const hideDatePicker = () => {
    setOpen(false)
  }
  const handleConfirm = (date) => {
    console.log(date);
    hideDatePicker()
  }
  return (
    <SafeAreaView style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => navigation.goBack()} title={"Fill Your Profile"} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          <CustomAvatar />
          <View style={styles.boxName}>
            <CustomTextInput2 textPlaceHolder={'First name'} />
            <View style={{ width: '2%' }}></View>
            <CustomTextInput2 textPlaceHolder={'Last name'} />
          </View>
          <CustomSwitch />
          <View style={styles.boxDate}>
            <TouchableOpacity style={styles.input} onPress={showDatePicker} >
              <Text style={{color: 'gray'}}>dd/mm/yyyy</Text>
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={open}
            mode="date"
            date={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <CustomTextInput textPlaceHolder={'Phone number'} />
        </View>
        <View style={styles.footer}>
          <CustomButton title={"Continue"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmInformationScreen;

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
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: "space-around",
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
  boxName: {
    width: "100%",
    flexDirection: "row"
  },
  input: {
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
    width: '100%',
  },
  boxDate: {
    width: "100%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 5
  },
});
