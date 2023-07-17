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
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import AppBar from "../../../components/custom-appbar";
import { CustomTextInput } from "../../../components/custom-textInput";
import { CustomTextInput2 } from "../../../components/custom-textInput";
import PhoneInput from 'react-native-phone-number-input';
import Sizebox from "../../../components/custom-sizebox";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomSwitch from "../../../components/custom-switch";
import { CustomButton, CustomHideButton } from "../../../components/custom-button";
import { ColorAssets } from "../../../utils/app-assets";
import CustomAvatar from "../../../components/custom-avatar";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ConfirmInformationScreen = ({ navigation }) => {
  const paddingTop = StatusBar.currentHeight || 0;
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [gender, setGender] = useState(false)
  const [dateBirth, setDateBirth] = useState('')

  //choose date
  const [open, setOpen] = useState(false);
  const showDatePicker = () => {
    setOpen(true);
  };
  const hideDatePicker = () => {
    setOpen(false);
  };
  const handleConfirm = (date) => {
    setOpen(false);
    let dateofbirth = dayjs(date).format('DD/MM/YYYY')
    console.log(dateofbirth);
    setDateBirth(dateofbirth)

  };
  //choose phone number
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);
  //hàm confirm số điện thoại
  const OnPress = () => {
    if (phoneNumber.length !== 0) {
      Alert.alert(
        "Confirm Number",
        phoneNumber,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed" + phoneNumber),
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
      );
    }
  }

  const getGender = (value) => {
    setGender(value)
  }
  return (
    <SafeAreaView style={[styles.container, { paddingTop }]}>
      <AppBar onPress={() => navigation.goBack()} title={"Fill Your Profile"} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <CustomAvatar />
            <Sizebox height={20} />
            <CustomTextInput onChangeText={(text) => { setFirstName(text) }} placeholder={"First name"} />
            <Sizebox height={20} />
            <CustomTextInput onChangeText={(text) => { setLastName(text) }} placeholder={"Last name"} />
            <Sizebox height={20} />
            <CustomSwitch onSwitch={getGender} />
            <Sizebox height={20} />
            <View style={styles.boxDate}>
              <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                <Text style={{ color: "gray" }}>{dateBirth?dateBirth+'':'Your date of birth'}</Text>
                <Image style={styles.iconimage} source={require('../../../assets/icons/iconcalendar.png')} />
              </TouchableOpacity>
            </View>
            <Sizebox height={20} />
            <DateTimePickerModal
              isVisible={open}
              mode="date"
              date={new Date()}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={styles.boxDate2}>
              <View style={styles.input2}>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={phoneNumber}
                  containerStyle={styles.phoneContainer}
                  textContainerStyle={styles.textInput}
                  onChangeFormattedText={text => {
                    setPhoneNumber(text);
                  }}
                  defaultCode="VN"
                  layout='first'
                  // withShadow
                />
              </View>
            </View>
          </View>

          <Sizebox height={40} />
          {(lastName && firstName && dateBirth && phoneNumber) ? <View style={styles.footer}>
            <CustomButton title={"Continue"} onPress={() => { }} />
          </View> : <View style={styles.footer}><CustomHideButton title={"Continue"}/></View>}
          
        </ScrollView>
      </KeyboardAvoidingView>
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
  content: {
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 15,
    justifyContent: "space-around",
  },
  title: {
    marginVertical: windowHeight / 11.5,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: windowWidth / 9.5,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  titleAlreadyHaveAccount: {
    color: ColorAssets.greyColor,
  },
  titleSignIn: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
  input: {
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
    width: "100%",
    justifyContent: 'center',
  },
  input2: {
    borderRadius: 5,
    width: "100%",
    justifyContent: 'center',
  },
  boxDate: {
    width: "100%",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 20,
    flexDirection: "row",
    paddingVertical: 5,
    position: 'relative',
    paddingHorizontal: 10
  },
  boxDate2: {
    width: "100%",
  },
  iconimage: {
    position: 'absolute',
    right: 10,
    height: 24,
    width: 24
  },
  phoneContainer: {
    width: "100%",
    borderColor: "gray",
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 15,
    fontSize: 16,
  },
  textInput:{
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 15,
    fontSize: 16,
  }
});
