import { StyleSheet, Dimensions, Text, View } from "react-native";
import { ColorAssets } from "../../utils/app-assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorAssets.whiteColor,
  },

  header: {
    paddingHorizontal: 15,
    paddingBottom: 8,
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rememberPassword: {
    paddingVertical: 5,
    paddingVertical:8,
    paddingHorizontal: 15,
    backgroundColor: ColorAssets.greyColor100,
  },
  viewButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  rememberButton: {
    width: 110,
    height: 40,
    paddingHorizontal:8,
    borderRadius: 100 / 2,
    backgroundColor: ColorAssets.greenColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textRememberPassword: {
    fontSize: 19,
    fontWeight: 600,
  },
  viewHeaderItemLeft: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
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
    marginBottom: 10,
    marginTop: 60,
  },

  textWelcome: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft:15,

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
    marginHorizontal: 15,
  },

  viewOptions: {
    marginBottom: 10,
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

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: ColorAssets.greenColor,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});

export default styles;
