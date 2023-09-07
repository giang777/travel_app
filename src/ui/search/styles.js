import { StyleSheet, Text, View } from "react-native";
import { ColorAssets } from "../../utils/app-assets";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 8,
  },

  viewHeaderItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoApp: {
    width: 30,
    height: 30,
  },

  nameApp: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  nameLogoApp: {
    fontSize: 21.5,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchBar: {
    height: 48,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#dedede",
    backgroundColor: "#dedede",
    padding: 5,
  },
  optionView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    padding: 5,
  },
  // focusedBorder: {
  //     borderColor: 'blue', // Đổi màu ở đây nếu bạn muốn màu khác
  // },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  viewOptions: {
    flexDirection: "row",
    marginTop: 10,
  },
  itemOptions: {
    width: 130,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    marginRight: 10,
    color: "white",
  },

  itemOptions_noActive: {
    backgroundColor: "white",
    borderColor: ColorAssets.greenColor,
  },

  itemOptions_isActive: {
    backgroundColor: ColorAssets.greenColor,
    borderColor: ColorAssets.greenColor,
  },

  ViewOP: {
    width: "100%",
    height: 50,
    marginVertical: 10,
  },

  nameApp: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    height: 700,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  slider: {
    width: "100%",
    height: 40,
    marginTop: 8,
  },
  ViewFilter: {
    width: "100%",
    height: 55,
    flexDirection:'row'
  },
  ViewCB: {
    width: "100%",
    height: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  labelcb: {
    fontSize: 16,
    marginLeft: 8,
  },
  ViewBtn: {
    flexDirection: "row",
  },
  btnDialog: {
    margin: 10,
    flex: 1,
    width: 100,
    height: 48,
    backgroundColor: "#1AB65C",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#1AB65C",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
