import { StyleSheet } from "react-native";
import { ColorAssets } from "../../utils/app-assets";
import { Platform } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const styleLoginHome = StyleSheet.create({
  content: {
    alignItems: "center",
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  title: {
    marginVertical:
      Platform.OS === "iOS" ? windowHeight / 6.2 : windowHeight / 5,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: windowWidth / 9.5,
  },
  contentButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imageIcon: {
    width: windowWidth / 15,
    height: windowWidth / 15,
  },
  buttonLoginGoogle: {
    paddingVertical: 14,
    width: "100%",
    borderRadius: 30,
    backgroundColor: ColorAssets.transparentColor,
    borderColor: ColorAssets.greyColor200,
    alignItems: "center",
    borderWidth: 1,
  },
  titleGoogle: {
    fontWeight: "bold",
    color: ColorAssets.blackolor,
    fontSize: windowWidth / 24,
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
  hr: {
    backgroundColor: ColorAssets.greyColor200,
    height: 1,
    width: "44%",
  },
});
export const styleLoginEmail = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderRadius: 6,
    borderColor: ColorAssets.greenColor,
    borderWidth: 3,
  },
  textError: {
    fontSize: 16,
    color: "red",
    marginHorizontal: 10,
    marginBottom: 8,
  },
  boxLoading: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorAssets.greyColor300,
  },
});

export const styleFogotPassword = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  icon: {
    width: 250,
    height: 300,
  },
  textForgotPass: {
    fontSize: 17,
    marginVertical: 10,
    color: ColorAssets.greyColor,
    textAlign: "left",
    width: "100%",
  },
});

export const styleSignUp = StyleSheet.create({
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
    color: ColorAssets.redColor,
    marginHorizontal: 10,
    marginBottom: 8,
  },
});

export const styleModalView = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorAssets.greyColor300,
  },
  titleModal: {
    fontSize: 24,
    fontWeight: "bold",
    color: ColorAssets.greenColor,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: ColorAssets.whiteColor,
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: ColorAssets.blackolor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btncancel: {
    backgroundColor: ColorAssets.whiteColor,
    width: "48%",
    borderRadius: 100,
    marginTop: 20,
  },
  btngohome: {
    backgroundColor: ColorAssets.greenColor,
    width: "48%",
    borderRadius: 100,
    marginTop: 20,
  },
  textgohome: {
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.whiteColor,
    textAlign: "center",
    padding: 15,
  },
  textcancel: {
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.greenColor,
    textAlign: "center",
    padding: 15,
  },
  shadowButton: {
    shadowColor: ColorAssets.blackolor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export const styleFGPSuccess = StyleSheet.create({
  boxTitle: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  textForgotPass: {
    fontSize: 16,
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  titleSignIn: {
    color: ColorAssets.greenColor,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-end",
    flex: 1,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorAssets.greyColor300,
  },
  congratulationView: {
    fontSize: 24,
    fontWeight: "bold",
    color: ColorAssets.greenColor,
  },
  success: {
    fontSize: 16,
    marginTop: 10,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: ColorAssets.whiteColor,
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: ColorAssets.blackolor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 250,
    height: 300,
  },
  btngohome: {
    backgroundColor: ColorAssets.greenColor,
    width: "100%",
    borderRadius: 100,
    marginTop: 20,
  },
  textgohome: {
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.whiteColor,
    textAlign: "center",
    padding: 15,
  },
});

export const styleFGPInputCode = StyleSheet.create({
  content: {
    alignItems: "center",
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  unFocus: {
    backgroundColor: ColorAssets.ceamyWhite,
    borderColor: ColorAssets.greyColor200,
  },
  text15: {
    fontSize: 15,
  },
  text16: {
    fontSize: 16,
  },
  timeCounter: {
    fontSize: 15,
    color: ColorAssets.greenColor,
  },
  timeCounterForm: { flexDirection: "row" },
  focus: {
    backgroundColor: ColorAssets.greenColor270,
    borderColor: ColorAssets.greenColor,
  },
  textNumber: {
    fontSize: 30,
    height: 55,
    width: "18%",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontWeight: "bold",
  },
  formInput: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
});

export const styleCreateNewPWD = StyleSheet.create({
  body: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    width: "100%",
    textAlign: "left",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-end",
    flex: 1,
  },
});
