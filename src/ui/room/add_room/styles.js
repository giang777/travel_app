import { StyleSheet } from "react-native";
import { ColorAssets } from "../../../utils/app-assets";

export default styles = StyleSheet.create({
  boxModal: {
    backgroundColor: ColorAssets.whiteColor,
  },
  topModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  titleModal: {
    fontSize: 21,
    fontWeight: "bold",
    color: ColorAssets.blackolor,
    marginVertical: 8,
  },
  rowTime: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  hrModal: {
    backgroundColor: ColorAssets.greyColor200,
    height: 1,
    marginBottom: 20,
    width: "100%",
  },
  bodyModal: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    display: "flex",
    backgroundColor: ColorAssets.whiteColor,
    justifyContent: "space-around",
  },
  bottomModal: {
    paddingHorizontal: 10,
  },
  text1Modal: {
    fontSize: 17,
    width: "100%",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text2Modal: {
    fontSize: 14.5,
    textAlign: "center",
    color: "grey",
    marginBottom: 25,
  },
  btnCancelModal: {
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 50,
    backgroundColor: ColorAssets.greenColor270,
  },
  textCancelModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.greenColor,
  },
  btnContinueModal: {
    backgroundColor: ColorAssets.greenColor,
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 50,
  },
  phoneContainer: {
    width: "100%",
    borderColor: ColorAssets.greyColor,
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 18,
    fontSize: 16,
    paddingVertical: 2,
  },

  viewMedia: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  textInput: {
    backgroundColor: ColorAssets.greyColor200,
    borderRadius: 18,
    fontSize: 16,
  },
  textContinueModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: ColorAssets.whiteColor,
  },
  item: {
    width: 120,
    height: 160,
    margin: 2,
    borderRadius: 8,
    backgroundColor: ColorAssets.greyColor200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
  },
  imageStyle: {
    width: 120,
    height: 160,
    resizeMode: "contain",
  },
  item_text: {
    fontSize: 40,
    color: ColorAssets.whiteColor,
  },

  
});
