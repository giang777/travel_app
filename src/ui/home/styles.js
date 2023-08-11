import { StyleSheet, Dimensions, Text, View } from "react-native";
import { ColorAssets } from "../../utils/app-assets";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorAssets.whiteColor,
    paddingVertical: 15,
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewHeaderItemLeft: {
    flex: 8,
    flexDirection: "row",
  },
  viewHeaderItemRight: {
    marginTop: 3,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
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
  seeAll: {
    fontSize: 18,
    color: ColorAssets.greenColor,
    fontWeight: "700",
    marginLeft: 10,
  },

  searchBar: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  textWelcome: {
    fontSize: 30,
    fontWeight: "700",
  },

  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: ColorAssets.greyColor100,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  viewOptions: {
    paddingHorizontal: 15,
    flexDirection: "row",
  },

  itemOptions: {
    paddingHorizontal: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1.5,
    marginRight: 10,
  },

  itemOptions_noActive: {
    backgroundColor: "white",
    borderColor: ColorAssets.greenColor,
  },

  itemOptions_isActive: {
    backgroundColor: ColorAssets.greenColor,
    borderColor: ColorAssets.greenColor,
  },
  content: {
    paddingHorizontal: 15,
  },
  headerBooked: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});

export default styles;
